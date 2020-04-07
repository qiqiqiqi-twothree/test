<template>
  <div class="body">
    <el-button @click="filter">练习</el-button>
    <el-button @click="confirm1">确定</el-button>
    <el-button @click="clickName">名字</el-button>
    <h3>{{ title }}</h3>
    <div class="partList">
      <van-checkbox-group v-model="result">
        <van-checkbox
          class="part"
          v-for="(item, index) in items"
          :key="index"
          :name="item.value"
        >
          <span class="item-name">{{ item.name }}</span>
          <span class="item-price">{{ item.price }}</span>
        </van-checkbox>
      </van-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [12, 5, 6, 8, 7, 15, 99, 100],
      title: '标题',
      content: '内容',
      result: [],
      items: [
        {
          value: '0',
          name: '普通支架',
          price: '40-80元'
        },
        {
          value: '1',
          name: '不锈钢支架',
          price: '80-150元'
        },
        {
          value: '2',
          name: '精美安装管槽',
          price: '100元/米'
        },
        {
          value: '3',
          name: '漏电开关',
          price: '100元/个'
        },
        {
          value: '4',
          name: '现场与师傅确认配件'
        }
      ]
    }
  },

  methods: {
    filter() {
      let result = this.arr.filter(item => {
        if (item % 3 == 0) {
          return true
        } else {
          return false
        }
      })
      alert(result)
    },
    confirm() {
      this.$confirm('确定要结束吗？', '删除项目', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '结束成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    confirm1() {
      console.log(1111)
    },
    clickName() {
      // console.log(this.name,111)
      // alert(hahah);
      console.log(111)
      console.log(2222)
      // console.log(this.name);
    }
  }
}
</script>

<style lang="less"></style>
