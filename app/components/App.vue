<template>
  <Page class="bg-blue-100" backgroundSpanUnderStatusBar="true">
    <ActionBar class="bg-blue-900 text-white text-lg" title="NativeScript Tailwind!" flat="true">
      <StackLayout
        orientation="horizontal"
        class="w-full"
        android:horizontalAlignment="left"
        ios:horizontalAlignment="center"
      >
        <Image src="res://icon" width="28" height="28" class="mr-4" verticalAlignment="center" />
        <Label
          text="NativeScript + Tailwind"
          class="text-base font-bold text-white"
          verticalAlignment="center"
        />
      </StackLayout>
    </ActionBar>

    <TabView :selectedIndex="selectedIndex">
      <TabViewItem title="Home" textTransform="capitalize">
        <GridLayout columns="*" rows="*, auto, *">
          <FlexboxLayout col="0" row="1" justifyContent="space-around" flexDirection="column">
            <Label class="font-bold text-blue-800 text-base text-center my-3" :text="msg" />
            <Label
              class="font-bold text-gray-800 text-md text-center my-3"
              :text="msg2"
              textWrap="true"
            />

            <Button
              col="0"
              row="1"
              class="bg-blue-200 text-blue-900 font-bold mx-8 py-1 my-4 rounded-sm text-md h-10"
              textTransform="capitalize"
              text="Last Start"
              @tap="goToPage"
            />
          </FlexboxLayout>
        </GridLayout>
      </TabViewItem>

      <TabViewItem title="Vuex" class="text-blue-800" textTransform="capitalize">
        <GridLayout rows="*" columns="*">
          <Button
            row="0"
            col="0"
            class="bg-blue-200 text-blue-900 font-bold mx-8 py-1 my-4 rounded-sm text-md h-10"
            textTransform="capitalize"
            text="Show Modal"
            @tap="showModal"
          />
        </GridLayout>
      </TabViewItem>

      <TabViewItem title="Apollo" textTransform="capitalize">
        <Label text="Apollo GraphQL" />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import Page2 from "./Page2";
import Modal from "./Modal";

export default {
  data() {
    return {
      msg: "Welcome to Demo App by @ghmeec",
      msg2: "NativeScript + Tailwind + Vue + VueX + Apollo + Hasura",
      selectedIndex: 0,
      searchQuery: ""
    };
  },
  created() {
    
  },
  methods: {
    goToPage() {
      console.time("TransitionTime");
      this.$navigateTo(Page2, {
        clearHistory: false,
        animated: false,
        transition: {
          name: "fade",
          duration: 0,
          curve: "easeIn"
        }
      });
     
    },
    showModal() {
      console.time("showModalTime");
      this.$showModal(Modal, {
        // fullscreen: true,
        props: { id: 14 },
        height: 200,
        width: 200
      });
    }
  }
};
</script>