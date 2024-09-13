<template>
  <el-aside width="150px">
    <el-menu
      :default-active="currentRoute"
      mode="vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item index="/system">通知配置</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'system-sidebar'
}
</script>
