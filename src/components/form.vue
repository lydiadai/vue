<template>
  <div>
    <div class='input'>
      <input type='text' v-model="input_value"/>
      input：{{input_value}}
    </div>
    <div class='input'>
      <textarea v-model="textarea_value"></textarea>
      text_area：{{textarea_value}}
    </div>
    <div class='input'>
      <input type='radio' v-model='radio_value' value='A'/> A
      <input type='radio' v-model='radio_value' value='B'/> B
      <input type='radio' v-model='radio_value' value='C'/> C
      radio： {{radio_value}}
    </div>
    <div class='input'>
      <input type='checkbox' v-model='checkbox_value'
        v-bind:true-value='true' v-bind:false-value='false'/>
      checkbox: {{checkbox_value}}
    </div>
    <div class='input'>
      <select v-model='select_value'>
        <option v-for="e in options" v-bind:value="e.value" :key='e.text'>
          {{e.text}}
        </option>
      </select>
      select:  {{select_value}}
    </div>
   <!--input type='button' @click='submit' value='提交'/-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      input_value: '',
      textarea_value: '',
      radio_value: '',
      checkbox_value: '',
      select_value: 'C',
      options: [
        {
          text: '锅包肉', value: 'guobaorou'
        },
        {
          text: '溜肉段', value: 'liurouduan'
        },
        {
          text: '小龙虾', value: 'xiaolongxia'
        }
      ]
    }
  },
  methods: {
    submit () {
      this.$http.post('/api/interface/blogs/add_comment',
        {
          content: this.content
        }
      ).then((response) => {
        alert('提交成功!, 刚才提交的内容是：' + response.body.content)
      }, (response) => {
        alert('出错了')
      })
    }
  }
}
</script>
<style>
.input{
  margin-top: 20px;
}
</style>
