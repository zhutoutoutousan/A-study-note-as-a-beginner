# 2021/3/29

## How would you approach the designing process of a single frontend component for any given requirements?
I was asked yet another question that I certainly not able to answer in an elegant manner. 
- [Vue优雅设计一个组件](https://juejin.cn/post/6844904050215878663)

# 2021/4/22
## Property or method xxx is not defined on the instance but ...

Fxxk, just a typo

# 2021/4/23
## Understanding of Vue Lifecycle and its integration with complex website projects

# 2021/4/24
## Why does `Could not read property *** of undefined` keep occuring?
I have met with this problem more than ten times just ten days after I joined my new company, can you do sth about that?

## Why shouldn't you use inline style in big Vue projects?

## Plz upgrade this `timeline` component so that it is perfect
```vue
<template>
    <div id="dataTimeline" ref="timeline" v-if="dataList" >
        <div class="timeline" v-if="dataList">
            <div class="timeline-row"  v-for="(item,index) in dataList" :key="index" @click="handleChangeClick(index)">
                <div class="timeline-time">
                    <!-- If you want to add the data to the left of the timeline -->
                    <span></span>
                </div>
                <div class="timeline-img" style="transform: translateY(-12%);">
                    <div class="timeline-img-circle"></div>
                    <div class="timeline-img-text" > &nbsp;{{ item.year }} <br> {{ item.month }}</div>
                </div>
                <div class="timeline-content">
                    <div class="content-body">
                        <h2>{{ item.projectTitle }}</h2>
                        <p>{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Testing drawer -->
        <!-- Tian Shao: 考虑到时间线可能更多与抽屉公用tandem -->
        <el-card v-if="drawerList[currentAlterationIndex] && dataList" class="box-card" style="position: fixed; height: 100%; width: 43%; right: 0%; top: 85px; z-index: 100;">
            <div slot="header" class="clearfix" v-if="dataList[currentAlterationIndex]">
                <span v-if="dataList[currentAlterationIndex].projectTitle">{{dataList[currentAlterationIndex].projectTitle}}</span>
            </div>
    
            <h3>{{ $t('change.objective') }}</h3>
            <p 
            style="margin: 15px 0;
                   padding: 6px;
                   background-color: #ebe8e8;
                   width: 90%;
                   font-size: 12px;">{{ drawerList[currentAlterationIndex].objective || `无` }}</p>
                       <h3>{{ $t('change.scope') }}</h3>
            <p 
            style="margin: 15px 0;
                   padding: 6px;
                   background-color: #ebe8e8;
                   width: 90%;
                   font-size: 12px;">
                {{ drawerList[currentAlterationIndex].scope || `无`}}                
            </p>
            <br>
            <h3>{{ $t('change.time') }}</h3>
            <p 
            style="margin: 15px 0;
                   padding: 6px;
                   background-color: #ebe8e8;
                   width: 90%;
                   font-size: 12px;">
                {{ drawerList[currentAlterationIndex].createTime.split('T')[0]}} ~ {{ drawerList[currentAlterationIndex].updateTime.split('T')[0]}}
            </p>

            <h3>{{ $t('change.documentations') }}</h3>
            <el-button type="primary" style="margin: 15px 0;">{{ $t('change.checkDocumentations') }}</el-button>
            <h3 style="margin: 15px 0;">{{ $t('change.model') }}</h3>
            <el-button type="primary" @click="handleCheckModel">{{ $t('change.viewModel') }}</el-button>
            <el-button @click="handleCompareModel" type="primary">{{ $t('change.compareModel') }}</el-button>
        </el-card>
        <el-card 
        v-else
        class="box-card" style="position: fixed; height: 100%; width: 40%; right: 0%; top: 85px; z-index: 100;"
        >
            <div slot="header" class="clearfix" v-if="dataList">
                <span v-if="dataList[currentAlterationIndex].projectTitle">{{dataList[currentAlterationIndex].projectTitle}}</span>
            </div>
    
            <h3>{{ $t('change.objective') }}</h3>
            <p style="margin: 15px 0;
                   padding: 6px;
                   background-color: #ebe8e8;
                   width: 90%;
                   font-size: 12px;">{{ $t('other.noData') }}</p>
            <h3>{{ $t('change.scope') }}</h3>
            <!-- <el-button type="primary" @click="handleChangeUpload()" style="margin-bottom: 10px;"  >{{ $t('change.edit')}}</el-button> -->
            <p style="margin: 15px 0;
                   padding: 6px;
                   background-color: #ebe8e8;
                   width: 90%;
                   font-size: 12px;">{{ $t('other.noData') }}</p>
            <h3>{{ $t('change.documentations') }}</h3>
            <p style="margin: 15px 0;
                   padding: 6px;
                   background-color: #ebe8e8;
                   width: 90%;
                   font-size: 12px;">{{ $t('other.noData') }}</p>
            <h3>{{ $t('change.model') }}</h3>
            <p style="margin: 15px 0;
                   padding: 6px;
                   background-color: #ebe8e8;
                   width: 90%;
                   font-size: 12px;">{{ $t('other.noData') }}</p>            
            <br>
            <br>
        </el-card>
    </div>

</template>

<script>
import { parseTime } from '@/utils/ST_parseTime.js';
import { docQueryAll } from '@/api/change.js';
// import {listAlterationItems}
export default {
    name: 'timeline',
    data() {
        return {
            drawer: false,
            direction: 'rtl',
            currentAlterationIndex : 0,
            dialogVisible: false,
            timeItemList: [
                {
                    time: '1522372393000',
                    img: 'static/touxiang.jpeg',
                    title: 'hzqing.com',
                    content: '这是衡钊清的个人博客'
                }
            ]
        }
    },
    props: {
        drawerList: {
            type: Array,
            default: []
        },
        dataList: {
            type:Array,
            default: []
            // TIAN: ISSUE: 如果这里有default初始化，父组件调用该子组件时会报错: timeItemList未定义
        },
        timelineColor:{ // 组建背景颜色
            type: String,
            default: 'transparent'
        },
        timeContentColor:{
            type: String,
            default: '#f2f2f2'
        }
    },
    filters: {
      formatDate(time) {
        return parseTime(time, '{y}年{m}月{d} {h}:{i}')
      }
    },
    created() {
        // this.docQueryAll();
    },
    updated() {
      const timeline = this.$refs.timeline
      timeline.style.setProperty('--timelineColor', this.timelineColor)
      timeline.style.setProperty('--timeContentColor', this.timeContentColor)
    },
    methods: {

        handleCompareModel() {
            
        },
        handleClose(done) {
            done();
        },
        handleChangeClick(index) {
            console.log('This event has been clicked')
            console.log(index);
            this.currentAlterationIndex = index;
            // this.drawer = !this.drawer;
        },
        docQueryAll() {
            docQueryAll().then(res => {
                console.log(res);
            });
        },
        handleUpload() {
            this.$refs.upload.dialogVisible = true;
        },
        handleCheckModel() {
            this.$router.push({path: '/model'})

            // REQUIRES: Cunlong Wu got the API shit
            // this.$store.dispatch('app/setSingle', this.info.isSingle);
            // this.$store.dispatch('app/setModelType', this.info.isSingle);
            // if (this.info.isSingle === 1) {
            //     //全场模型
            //     this.$store.dispatch('app/updateVersion', this.info.versionId);
            // }
            // //轻量化模型
            // this.$router.push({
            //     path: '/model',
            //     query: { modelCode: this.info.modelCode }
            // });

        }
    }
}
</script>


<style scoped  lang="scss">
#dataTimeline{
    list-style: none;
    position: relative;
    left: -35%;
    padding: 20px;
    margin: 0 auto;
    overflow: hidden;
    background: var(--timelineColor);
    font-family: "微软雅黑", Arial, Helvetica, sans-serif;
    .timeline {
        transform: translate(-10%, -4%);
    }
    .timeline-row{
        padding-left: 50%;
        z-index: 10;
        position: relative;
        .timeline-time{
            position: absolute;
            right: 50%;
            text-align: right;
            margin-right: 60px;
            font-size: 14px;
            line-height: 35px;
            top: 40px;
        }
        .timeline-img{
            position: absolute;
            top: 30px;
            left: 48.5%;
            margin-left: -15px;
            width: 60px;
            height: 60px;
            text-align: center;
            overflow: hidden;
            padding: 6px;
            font-size: 12px;
            z-index: 100;
            border-radius: 50%;
            background: #DFE8EB; 
            .timeline-img-circle {
                position: absolute; 
                left:5%; 
                top: 5%; 
                width: 90%; 
                height: 90%; 
                border-radius: 50%; 
                background-color: #20AEDD;
            }
            .timeline-img-text {
                line-height: 20px; 
                color: white; 
                z-index: 100; 
                position: absolute; 
                left:21%; 
                top: 19%;
            }
        }
        .timeline-content{
            position: relative;
            transform: translateY(20%);
            background: var(--timeContentColor);
            color: #333333;
            border: 2px rgb(161, 161, 219) solid;
            border-radius: 50px;
            margin-right: 0px;
            margin-left: 60px;
            margin-bottom: 20px;
            min-height: 80px;
            .content-body{
                padding: 15px 15px 2px;
                position: relative;
                z-index: 10;
                h2{
                    font-size: 13px;
                    margin-bottom: 12px;
                    margin-top: 0;
                    line-height: 15px;
                    font-weight: 600;
                }
                p{
                    margin: 0px 0px 15px;
                }
            }
        }

        // Tian Shao: 如果需要时间线和项目之间有连线可以uncomment下列代码
        // .timeline-content:after{
        //     content: "";
        //     position: absolute;
        //     top: 60px;
        //     left: -60px;
        //     height: 4px;
        //     width: 80px;
        //     background-color: rgba(0, 0, 0, 0.2);
        //     z-index: -1;
        // }
    }

    .timeline-row:hover {
        .timeline-img {
            background-color: #79bad0;
            cursor: pointer;
        }

        .timeline-content {
            box-sizing: content-box;
            border: 2px rgb(14, 14, 207) solid;
            border-radius: 40px;
            cursor: pointer;
        }
    }

    // TIAN SHAO: 如果页面样式要改成左右式， 可将该段代码uncomment

    // .timeline-row:nth-child(odd){ // 奇数样式
    //     padding-left: 0;
    //     padding-right: 50%;
    //     .timeline-time{
    //         right: auto;
    //         left: 50%;
    //         text-align: left;
    //         margin-right: 0;
    //         margin-left: 60px;
    //     }
    //     .timeline-content{
    //         margin-right: 60px;
    //         margin-left: 0px;
    //     }
    //     .timeline-content:after{
    //         left: auto;
    //         right: -60px;
    //     }
    // }

//    @media screen and (max-width:1200px){
//         .timeline{
//             .timeline-row {
//                 position: relative;
//                 right: auto;
//                 top: 0;
//                 margin: 0 0 6px 56px;
//                 padding: 0;
//                 margin-bottom: 16px;
//             }
//             .timeline-row:nth-child(odd){
//                 padding-right: 0;
//                 .timeline-content{
//                     margin-right: 0px;
//                     margin-left: 40px;
//                 }
//                 .timeline-time {
//                     position: relative;
//                     right: auto;
//                     left: auto;
//                     top: 0;
//                     text-align: left;
//                     margin: 0 0 0px 40px;
//                 }
//             }
//             .timeline-img{
//                 top: 40px;
//                 left: -55px;
//                 margin-left: 0;
//                 padding: 0px;
                
//             }
//             .timeline-time {
//                 position: relative;
//                 right: auto;
//                 left: auto;
//                 top: 0;
//                 text-align: left;
//                 font-size: 15px;
//                 margin: 0 0 0px 40px;
//             }
//             .timeline-content{
//                 margin-left: 40px;
//                 box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
//                 position: relative;
//             }
//             .timeline-content:after{
//                 right: auto !important;
//                 left: -65px !important;
//                 top: 30px;
//             }
//         }
//         .timeline:after{
//             left: 50px;
//         }
        
//     }
}

.timeline:after{
    content: "";
    position: absolute;
    top: 0;
    left: 49.75%;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 3px;
    border-radius: 2px;
    margin-left: -2px;
    display: block;
}


// 修复不同界面时间纵轴的适配问题
@media screen and (max-width:1500px){
    .timeline:after {
        left: 50.5%;
    }
}

</style>

```