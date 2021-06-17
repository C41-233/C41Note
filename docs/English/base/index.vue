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
.word-base__word-card{
    width: 50%;
    display: inline-block;
    vertical-align: top;
    border-top: 1px dotted black;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 16px;
}
</style>

<template name="word-base">
<el-row class="max-height">
    <el-col :span="2" class="max-height">
        <ul class="list-group">
            <template v-for="item in Keys">
                <li class="list-group-item word-base__list-item active" v-if="item === Key">{{item}}</li>
                <li class="list-group-item word-base__list-item inactive" v-else @click="Change(item)">{{item}}</li>
            </template>
        </ul>
    </el-col>
    <el-col :span="22" v-if="Document !== null" class="max-height" style="padding-left:10px; padding-right:10px;">
        <div v-for="word in Document" class="word-base__word-card">
            <el-row v-for="item in word.elements">
                <el-col :span="8" style="font-weight:bold">{{item.attributes.value}}</el-col>
                <el-col :span="8">{{item.name}}</el-col>
                <el-col :span="8">{{item.elements[0].text}}</el-col>
            </el-row>
        </div>
    </el-col>
</el-row>
</template>

<script>
Common.vue("word-base", {
    data(){
        return {
            Keys: Array.sequence("A", "Z"),
            Key: "A",
            Document: null
        }
    },
    created(){
        let key = Common.URL.getParameter("key") || 'A';
        this.Change(key);
    },
    methods: {
        async Change(key){
            this.Key = key;
            Common.URL.setParameter("key", key); 

            let body = await Common.http.get(`base/${key}.xml`);
            doc = xml2js(body);
            this.Document = doc.elements[0].elements;
        }
    }
});
</script>