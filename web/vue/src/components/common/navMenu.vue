<template>
  <div v-cloak>
    <el-menu
      :default-active="currentRoute"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-row>
        <el-col :span="2">
          <el-menu-item index="/task">任务管理</el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-menu-item index="/system">系统管理</el-menu-item>
        </el-col>
        <el-col :span="16"></el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'app-nav-menu',
  data () {
    return {}
  },
  computed: {
    currentRoute () {
      if (this.$route.path === '/') {
        return '/task'
      }
      const segments = this.$route.path.split('/')
      return `/${segments[1]}`
    }
  },
  methods: {
  }
}
</script>
