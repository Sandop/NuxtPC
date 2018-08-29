<template>
  <div>
    <ul class="pagination">
      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> {{prePage}} </a></li>
      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> {{homePage}} </a></li>
      <li v-for="(p,index) in grouplist" :class="{'active': current == p.val}" :key="index">
        <a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> {{lastPage}} </a></li>
      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"> {{nextPage}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'pagination',
    data(){
      return {
        prePage: '<',
        nextPage: '>',
        homePage: '<<',
        lastPage: '>>',
        current: this.currentPage
      }
    },
    props: {
      total: {// 数据总条数
        type: Number,
        default: 0
      },
      display: {// 每页显示条数
        type: Number,
        default: 8
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page () { // 总页数
        return Math.ceil(this.total / this.display);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, 
            temp = [], 
            list = [], 
            count = Math.floor(this.pagegroup / 2), 
            center = this.current;

        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          };
          return temp;
        }

        while (len--) {
          temp.push(this.page - len);
        };

        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pagechange', this.current);
        }
      }
    }
  }
</script>

<style scoped>
  ul.pagination {
      overflow:  hidden;
      width:  100%;
  }

  ul.pagination li {
      display: inline-block;
      margin: 0 5px;
      width: 38px;
      height: 38px;
      text-align: center;
  }

  ul.pagination li a {
      display: inline-block;
      width: 38px;
      height: 38px;
      background: #fff;
      border: 2px solid #000;
      color: #000;
      font-size: 14px;
      line-height: 34px;
      text-align: center;
      box-sizing: border-box;
  }

  ul.pagination li:first-child,ul.pagination li:nth-child(2),ul.pagination li:last-child,ul.pagination li:nth-last-child(2) {
    font-family: "Simsun";
    font-weight: bold;
  }

  ul.pagination li.active a,ul.pagination li:hover a {
      background: #000;
      color: #feeabd;
  }

</style>