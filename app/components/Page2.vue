<template>
  <Page class="bg-blue-100">
    <ActionBar class="bg-blue-900 text-white text-lg" title="NativeScript Tailwind!" flat="true">
      <StackLayout
        orientation="horizontal"
        class="w-full"
        android:horizontalAlignment="left"
        ios:horizontalAlignment="center"
      >
        <Label
          text="NativeScript + Tailwind"
          class="text-base font-bold text-white"
          verticalAlignment="center"
        />
      </StackLayout>
    </ActionBar>

    <StackLayout orientation="vertical" class="px-2">
      <StackLayout v-if="loaded" orientation="vertical" class="py-2">
        <Label
          col="0"
          row="0"
          class="font-bold text-blue-800 text-base text-center my-3"
          :text="count"
        />

        <GridLayout rows="auto" columns="*,*" class="py-4">
          <Button
            row="0"
            col="1"
            class="bg-blue-200 text-blue-900 font-bold mx-8 py-1 my-4 rounded-sm text-md h-10"
            text=" + "
            @tap="increase()"
          />

          <Button
            row="0"
            col="0"
            class="bg-blue-200 text-blue-900 font-bold mx-8 py-1 my-4 rounded-sm text-md h-10"
            text=" - "
            @tap="decrease()"
          />
        </GridLayout>
      </StackLayout>
      <GridLayout v-if="loaded" class="my-8">
        <ActivityIndicator
          busy="true"
          v-if="$apollo.queries.todos.loading"
          class="text-blue-900"
          width="50"
          height="50"
        />
        <!-- <Label
          v-if="error"
          class="font-bold text-red-800 text-base text-center my-3"
          textWrap="true"
          :text="error"
        />
         -->
        
        <ListView v-if="loaded&&todos2" for="todo in todos2" row="0" col="0" class="m-20 bg-white" 
          @itemTap="onItemTap"
          @onScroll="scrollData"
         >
          <v-template class="py-4">
            <Label :text="todo.title" :key="todo.id" class="py-4 pl-2" />
          </v-template>
        </ListView>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      todos: null,
      error: null,
      loaded:false,
      todos2: [
        { id: 1, title: "Test 1" },
        { id: 2, title: "Test 1" },
        { id: 3, title: "Test 1" },
        { id: 4, title: "Test 1" },
        { id: 5, title: "Test 1" },
        { id: 6, title: "Test 1" },
        { id: 7, title: "Test 1" },
        { id: 8, title: "Test 1" },
        { id: 9, title: "Test 1" },
        { id: 10, title: "Test 1" },

        ]
    };
  },
  mounted() {
    this.loaded=true
    console.timeEnd("TransitionTime");
  },
  created() {
    console.timeEnd("TransitionTime");
  },
  apollo: {
    todos: {
      query: gql`
        query todos {
          todos {
            id
            title
          }
        }
      `,
      error(error) {
        this.error = JSON.stringify(error.message);
      }

      // pollInterval:500
      // update(data) {
      //   // This function returns our QUERY into the data property "items" when the component is loaded.
      //   console.log("First time returned data : ", data);
      //   //    return data.myschema_mytable;
      // }
      //   pollInterval:1000
    }
    // subscribeToMore: {
    //   // below is the subscription query.
    //   todos: gql`
    //     subscription todos {
    //       todos {
    //         title
    //       }
    //     }
    //   `,
    //   updateQuery: (previousResult, { subscriptionData }) => {
    //     console.log("Previous Results : ", previousResult);
    //     console.log("New results : ", subscriptionData.data);
    //     return subscriptionData.data; // This returns our SUBSCRIPTION into the data property "items" when there is an update
    //   }
    // }
  },
  created() {},
  methods: {
    onItemTap(data){
      // console.log("Tapped data : ",data)
      alert("Clicked : "+JSON.stringify(data.item))
    }
    ,
    scrollData($evt) {
      console.log("Data : ", $$evt);
    },
    increase() {
      this.$store.commit("increase");
    },
    decrease() {
      this.$store.commit("decrease");
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>