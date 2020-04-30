<template>
  <Page class="bg-blue-100" backgroundSpanUnderStatusBar="true">
    <ActionBar 
    class="bg-blue-900 text-white text-lg" 
    title="NativeScript Tailwind!" 
    flat="true"
    >
      <!-- <NavigationButton text="Go Back" android.systemIcon="ic_menu_share"></NavigationButton>
      <ActionItem
        tap="onShare"
        ios.systemIcon="9"
        ios.position="left"
        android.systemIcon="ic_menu_share"
        android.position="actionBar"
      ></ActionItem>
      <ActionItem
        tap="onDelete"
        ios.systemIcon="16"
        ios.position="right"
        text="delete"
        android.position="popup"
      ></ActionItem>-->
      <StackLayout orientation="horizontal" class="w-full" android:horizontalAlignment="left"  ios:horizontalAlignment="center">
        <Image src="res://icon" width="28" height="28" class="mr-4" verticalAlignment="center" />
        <Label text="NativeScript + Tailwind" class="text-base font-bold text-white" verticalAlignment="center" />
      </StackLayout>
    </ActionBar>

    <TabView :selectedIndex="selectedIndex">
      <TabViewItem title="Home" textTransform="capitalize">
        <GridLayout columns="*" rows="*, auto, *">
          <FlexboxLayout col="0" row="1" justifyContent="space-around" flexDirection="column">
            <Label class="font-bold text-blue-800 text-base text-center my-3" :text="msg" />
            <Label class="font-bold text-gray-800 text-md text-center my-3" :text="msg2" />

            <Button
              col="0"
              row="1"
              class="bg-blue-200 text-blue-900 font-bold mx-8 py-1 my-4 rounded-sm text-md h-10"
              textTransform="capitalize"
              text="Last Start"
              @tap="$navigateTo(page2,{
                         clearHistory: false,
                         animated: true,
                         transition: {
                             name: 'slideLeft',
                             duration: 100,
                             curve: 'easeIn'
                         }})"
            />
          </FlexboxLayout>
        </GridLayout>
      </TabViewItem>
      <TabViewItem title="Vuex" class="text-blue-800" textTransform="capitalize">
        <Label text="Content for Tab 2" />
      </TabViewItem>

      <TabViewItem title="Apollo" textTransform="capitalize">
        <Label text="Apollo GraphQL" />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import Page2 from "./Page2";

export default {
  data() {
    return {
      msg: "Welcome to Demo App by @ghmeec",
      msg2: "NativeScript + Tailwind + Vue + Vue + Apollo",
      page2: Page2,
      selectedIndex: 0,
      searchQuery:""
    };
  }
};
</script>