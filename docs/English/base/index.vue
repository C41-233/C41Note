<style>
.word-base__list-item{
    text-align: center;
    padding-top:3px;
    padding-bottom:3px;
}
.word-base__list-item.active{
    font-weight: bold;
}
.word-base__list-item.inactive{
    cursor: pointer;
}
.word-base__list-item.inactive:hover{
    background-color: #f5f5f5;
}
</style>

<template name="word-base">
<el-row class="max-height">
    <el-col :span="2" class="max-height">
        <ul class="list-group">
            <template v-for="item in Keys">
                <li class="list-group-item word-base__list-item active" v-if="item === key">{{item}}</li>
                <li class="list-group-item word-base__list-item inactive" v-else>{{item}}</li>
            </template>
        </ul>
    <el-col>
</el-row>
</template>

<script>
Common.vue("word-base", {
    data(){
        return {
            Keys: Array.sequence("A", "Z"),
            key: "A"
        }
    },
    created(){
        let key = Common.url.getParameter("key") || 'A';
        this.Key = key;
    }
});
</script>