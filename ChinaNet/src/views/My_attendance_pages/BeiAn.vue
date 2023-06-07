<template>
  <div>
    <div class="heading-container" style="margin-top: 19rem;">
      <headingPage />
    </div>
    <div class="form-container">
      <el-button text @click="dialog = true">发起申请</el-button>
      <el-drawer
        ref="drawerRef"
        v-model="dialog"
        title=""
        :before-close="handleClose"
        direction="ltr"
        class="demo-drawer"
      >
        <div class="demo-drawer__content">
          <el-form :model="form">
            <el-form-item label="Name" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Area" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="Please select activity area">
                <el-option label="出差" value="出差" />
                <el-option label="拜访客户" value="拜访客户" />
                <el-option label="年休假" value="年休假" />
                <el-option label="事假" value="事假" />
                <el-option label="病假" value="病假" />
                <el-option label="产假" value="产假" />
                <el-option label="婚嫁" value="婚嫁" />
                <el-option label="护理假" value="护理假" />
                <el-option label="探亲假" value="探亲假" />
                <el-option label="丧假" value="丧假" />
                <el-option label="育儿假" value="育儿假" />
                <el-option label="参加会议" value="参加会议" />
              </el-select>
            </el-form-item>
          </el-form>
          <div class="demo-drawer__footer">
            <el-button @click="cancelForm">Cancel</el-button>
            <el-button type="primary" :loading="loading" @click="onClick">
              {{ loading ? 'Submitting ...' : 'Submit' }}
            </el-button>
          </div>
        </div>
      </el-drawer>
      <h1>Selected Region: {{ form.region }}</h1>
    </div>
    <LeftSidebar />
  </div>
</template>

<script lang="ts" setup>
import headingPage from './heading.vue';
import LeftSidebar from '../../components/LeftSidebar.vue';
import { reactive, ref, watch } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'

const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const drawerRef = ref<InstanceType<typeof ElDrawer>>()
const onClick = () => {
  drawerRef.value!.close()
}

const handleClose = (done) => {
  if (loading.value) {
    return
  }
  ElMessageBox.confirm('Do you want to submit?')
    .then(() => {
      loading.value = true
      timer = setTimeout(() => {
        done()
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false
        }, 400)
      }, 2000)
    })
    .catch(() => {
      // catch error
    })
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}

watch(form.region, (newValue) => {
  console.log('Selected Region:', newValue);
});
</script>

<style>
.hello {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.heading-container {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-container {
  position: absolute;
  top: 20%;
  left: 50%;

}
</style>