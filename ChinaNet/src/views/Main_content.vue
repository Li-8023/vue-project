<template>
  <el-scrollbar height="600px">
    <div class="page">
      <div class="content">
        <div class="heading">
          <el-text class="mx-1 center-text" size="large" tag="b"
            >吉安电信考勤管理办法</el-text
          >
          <div class="divider"></div>
          <div class="text-line">
            <el-text class="mx-1" size="small"
              >为落实省市公司有关工作要求，根据市公司《关于全面加强工作生产劳动纪律管理的通知》
              （中电信吉安[2016]165号）的要求，现将吉安电信考勤管理办法公示如下。</el-text
            >
            <br />
            <el-text class="mx-1 left-text" tag="b">一、请假报备规则</el-text>
            <br />
            <el-text class="mx-1" size="small"
              >1. 考勤时间：上午8:30-12:00，下午14:00-17:30</el-text
            >
            <br />
            <el-text class="mx-1" size="small"
              >2.
              考勤打卡次数一天四次，上午和下午上下班各一次，上午下班和下午上班刷卡时间需间隔20分钟以上</el-text
            >
            <br />
            <el-text class="mx-1" size="small"
              >3. 迟到：晚于8:30、14:00视为迟到，考核100元/次</el-text
            >
            <br />
            <el-text class="mx-1" size="small"
              >4. 早退：早于12:00、17:30视为早退，考核100元/次</el-text
            >
            <br />
            <el-text class="mx-1" size="small"
              >5. 旷工：上午班或下午班未刷卡者视为旷工，考核500元/次</el-text
            >
            <br />
            <el-text class="mx-1" size="small"
              >6.
              报备流程：须当月完成报备申请，不可跨月报备。系统自动关联考勤结果</el-text
            >
            <br />
            <el-text class="mx-1 left-text" tag="b">二、报备规则</el-text>
            <br />
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="reason" label="事由" width="400" />
              <el-table-column prop="name" label="申请角色" width="180" />
              <el-table-column prop="day" label="天数" width="90" />
              <el-table-column prop="first" label="一审" width="90" />
              <el-table-column prop="second" label="二审" width="90" />
              <el-table-column prop="third" label="三审" width="90" />
            </el-table>
            <el-text class="mx-1" size="small"
              >注1：员工事假16天以上须由员工本人书面向主要领导申请，签字同意后再在系统中申请</el-text
            >
            <br />
            <el-text class="mx-1" size="small"
              >注2：病假1个月以上须本人书面向主要领导申请，签字同意后再在系统中申请</el-text
            >
          </div>
        </div>
        <!-- Content -->
        <router-view />
      </div>
      <div class="body">
        <!-- Add any content for the "body" section here -->
      </div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const tableData = [
  {
    reason: "年休假，产假，婚嫁，护理假，探亲假，丧假，育儿假",
    name: "员工",
    day: "",
    first: "部门主任",
    second: "",
    third: "",
  },
  {
    reason: "年休假，产假，婚嫁，护理假，探亲假，丧假，育儿假",
    name: "部门副职",
    day: "",
    first: "部门主任",
    second: "分管领导",
    third: "",
  },
  {
    reason: "年休假，产假，婚嫁，护理假，探亲假，丧假，育儿假",
    name: "部门正职",
    day: "",
    first: "",
    second: "分管领导",
    third: "",
  },
  {
    reason: "出差，拜访客户，参加会议",
    name: "员工、部门副职",
    day: "",
    first: "部门主任",
    second: "",
    third: "",
  },
  {
    reason: "出差，拜访客户，参加会议",
    name: "部门正职",
    day: "",
    first: "",
    second: "分管领导",
    third: "",
  },
  {
    reason: "事假",
    name: "员工",
    day: "5天内",
    first: "部门主任",
    second: "",
    third: "",
  },
  {
    reason: "事假",
    name: "员工",
    day: "6天及以上",
    first: "部门主任",
    second: "分管领导",
    third: "",
  },
  {
    reason: "事假",
    name: "部门副职",
    day: "5天内",
    first: "部门主任",
    second: "分管领导",
    third: "",
  },
  {
    reason: "事假",
    name: "部门副职",
    day: "6天及以上",
    first: "部门主任",
    second: "分管领导",
    third: "主要领导",
  },
  {
    reason: "事假",
    name: "部门正职",
    day: "5天内",
    first: "",
    second: "分管领导",
    third: "",
  },
  {
    reason: "事假",
    name: "部门正职",
    day: "6天及以上",
    first: "",
    second: "分管领导",
    third: "主要领导",
  },
  {
    reason: "病假",
    name: "员工、部门副职",
    day: "5天内",
    first: "部门主任",
    second: "",
    third: "",
  },
  {
    reason: "病假",
    name: "员工、部门副职",
    day: "6天及以上",
    first: "部门主任",
    second: "",
    third: "",
  },
  {
    reason: "病假",
    name: "部门正职",
    day: "",
    first: "",
    second: "分管领导",
    third: "",
  },
];
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.page {
  display: flex;
}

.heading {
  margin-left: 2rem;
}

.divider {
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
  margin-top: 10px;
}

.text-line {
  margin-bottom: 10px;
}

.left-text {
  margin-left: 0;
}

.content {
  text-align: left; /* Align text to the right */
}

.center-text {
  margin: 900 auto; /* Add this line to center-align the text */
  text-align: center;
}
</style>
