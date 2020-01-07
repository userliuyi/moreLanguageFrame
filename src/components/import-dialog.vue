<template>
    <el-dialog :visible.sync="visible"
        :title="$t('btn.import')"
        custom-class="skynet-reset-dialog-header batch-import-dialog u-file-upload">
        <el-row>
            <el-upload
                :action="uploadUrl"
                accept=".xlsx,.xls"
                :data="params"
                :on-success="handleSuccess"
                :on-error="handleError"
                ref="upload"
                :show-file-list="true"
                :limit="1">
                <el-button type="primary">{{ $t('btn.upload') }}</el-button>
                <div class="el-upload__tip" slot="tip">
                    <span>{{ $t('message.uploadFileTip') }}</span>
                    (<span class="color-blue cursor-pointer" @click="downLoadTemp">{{ $t('message.downloadImportTemp') }}</span>)
                </div>
            </el-upload>
        </el-row>
    </el-dialog>
</template>

<style lang="scss">
    .batch-import-dialog {
        width: 700px;
    }
</style>

<script>

    export default {

        name: 'import-issue',

        data () {
            return {
                visible: false
            }
        },

        props: {
            uploadUrl: {
                type: String,
                required: true
            },
            downloadUrl: {
                type: String,
                required: true
            },
            params: {
                type: Object,
                default () { return {} }
            }
        },

        created () {
            this.$on('showDialog', (data) => {
                this.visible = true;
            });
        },

        methods:{
            handleError (err, response) {
                this.$message.error(this.$t('message.uploadFail'));
            },
            handleSuccess (response, file, fileList) {
                // code为0或者8都是上传成功，但要展示的提示信息不一样
                this.visible=false;
                this.$refs.upload.clearFiles();
                if(response.code == 0) {
                    this.$message.success(this.$t('message.uploadSuccess'));
                    this.$emit('uploadSuccess');
                } else if(response.code == 8) {
                    this.$message.success(response.msg);
                    this.$emit('uploadSuccess');
                } else {
                    this.$message.error(this.$t('message.uploadFail'));
                    fileList.splice(fileList.length - 1, 1);
                }
            },
            downLoadTemp () {
                window.location.href = this.downloadUrl;
            }
        }
    };
</script>
