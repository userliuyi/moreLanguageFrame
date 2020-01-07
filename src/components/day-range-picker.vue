<template>
    <el-date-picker
        v-model="dateRange"
        :clearable="true"
        :editable="true"
        range-separator="-"
        format="yyyy/MM/dd"
        type="daterange"
        :picker-options="pickerOptions"
        @input="triggerInput"
        placeholder="YYYY/MM/dd-YYYY/MM/dd">
    </el-date-picker>
</template>

<style></style>

<script>
    import moment from 'moment';

    export default {

        name: 'day-range-picker',

        components: {},

        data () {
            return {
                dateRange: this.value.map((date) => {
                    return date;
                })
            };
        },

        props: {
            // 写成value，组件才可以通过v-model获取
            value: {
                type: Array,
                default () {
                    return [];
                },
                required: true
            },
            pickerOptions: {
                type: Object,
                default () {
                    return {
                        shortcuts: [{
                            text: '最近1周',
                            onClick(picker) {
                                const end = new Date();
                                /*moment().startOf('day');// 当天零点
                                moment().subtract(1,'days').startOf('day');// 昨天零点*/
                                const start = moment().subtract(6,'days').startOf('day');
                                picker.$emit('pick', [start, end]);
                            }
                        },{
                            text: '最近1个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = moment().subtract(1,'months').startOf('day');
                                picker.$emit('pick', [start, end]);
                            }
                        },{
                            text: '最近3个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = moment().subtract(3,'months').startOf('day');
                                picker.$emit('pick', [start, end]);
                            }
                        },{
                            text: '最近6个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = moment().subtract(6,'months').startOf('day');
                                picker.$emit('pick', [start, end]);
                            }
                        },{
                            text: '最近1年',
                            onClick(picker) {
                                const end = new Date();
                                const start = moment().subtract(1,'years').startOf('day');
                                picker.$emit('pick', [start, end]);
                            }
                        },{
                            text: '最近2年',
                            onClick(picker) {
                                const end = new Date();
                                const start = moment().subtract(2,'years').startOf('day');
                                picker.$emit('pick', [start, end]);
                            }
                        }
                        ],
                    };
                }
            }
        },

        mounted () {},

        watch: {
            value () {
                this.dateRange = this.value.map((date) => {
                    return date;
                });
            },
        },

        methods: {
            triggerInput () {
                if (this.dateRange && this.dateRange.length > 0) {
                    let startTime = new Date(moment(this.dateRange[0]).startOf('seconds').valueOf());
                    let endTime = new Date(moment(this.dateRange[1]).endOf('seconds').valueOf());
                    if (endTime < startTime) {
                        endTime = startTime;
                    }
                    if(this.dateRange[0]) {
                        this.$emit('input', [
                            startTime, endTime
                        ]);
                    } else {
                        this.$emit('input', []);
                    }
                } else {
                    this.$emit('input', []);
                }
            },
        }
    };

</script>