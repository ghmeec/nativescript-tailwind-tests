<template>
  <Page class="bg-blue-100">
    <ActionBar class="text-white" title="Modal" flat="true" />
    <GridLayout columns="*" rows="*" class="px-2 bg-red-100" >
        <Label text="From Modal" textWrap="true" row="0" col="0"/>
    </GridLayout>
  </Page>
</template>

<script>


export default {
  data() {
    return {
    }
  },
  mounted(){
      console.timeEnd("showModalTime");
  }
  
};
</script>