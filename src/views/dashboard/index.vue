<template>
    <div ref="outDiv" style="max-height: 120px; overflow-y: auto;"  @scroll="scrollEvent">
        {{ $t('msg.dashboard')}}
        <div @click="buttonClick1">
            <el-button @click.stop="buttonClick"> 点击</el-button>

            <!-- 提交事件不再重载页面 -->
            <el-form>
                <el-button type="submit" @submit.prevent.stop="onSubmit">提交表单</el-button>
            </el-form>


            <!-- 修饰符可以串联 -->
            <!--
                .prevent -> 阻止a标签的默认行为跳转
                .stop   -> 阻止向上传播，所以不打印外部
            -->
            <a v-on:click.stop.prevent="doThat" href="#">a点击跳转</a>
            
           
        </div>
        <!--
            .capture -> 点击内部按钮，由于外部事件捕获了你，所以先执行外部事件，先打印“捕获的话先执行”，然后执行内部事件，打印“capture是否捕获”
        -->
        <div @click.capture="captureClick">
            <el-button @click="beCapturedEvent">点击查看外部是否捕获点击事件先执行</el-button>
        </div>
        
        
        
        <!--
            .passive  防止等待监听器执行，造成卡顿的行为，尤其是滚动事件；手机端：touchStart等等事件
        -->
       <!-- <div style="height: 500px;">
            123
        </div>-->
        
        <div>
            <el-date-picker type="dates" v-model="dateArr"></el-date-picker>
            <el-date-picker type="daterange" v-model="rangeDate"></el-date-picker>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            dateArr: [],
            rangeDate: []
        };
    },
    methods: {
        
        //.stop 阻止事件的传播，点击时只打印内部，不打印外部
        //.prevent 阻止事件的默认行为
        
        buttonClick() {
            console.log('内部');
        },
        buttonClick1() {
            console.log('外部');
        },
        onSubmit() {
            console.log('提交表单');
        },
        //a标签的默认跳转行为被prevent
        doThat() {
            console.log('a');
        },
        //外部捕获事件
        captureClick() {
            console.log('捕获的话先执行');
        },
        //内部被捕获事件
        beCapturedEvent() {
            console.log('capture是否捕获');
        },
        scrollEvent() {
            console.log(this.$refs.outDiv.scrollTop);
        }
    }
};
</script>

<style scoped lang="scss">

</style>