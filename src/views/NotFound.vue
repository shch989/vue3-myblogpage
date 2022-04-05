<template>
  <div id="content">
      <h3>{{ title }}</h3>
      <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "불법적인 접근입니다. Not Found 페이지"
        }
    }
}
</script>

<style scoped>
#content {
    margin-top: 200px;
    text-align: center;
}
</style>