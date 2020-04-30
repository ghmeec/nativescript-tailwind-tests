<template>
  <Page class="bg-blue-100">
    <ActionBar class="bg-blue-900 text-white" title="NativeScript + Tailwind" flat="true" />
    <GridLayout columns="*" rows="*" class="px-8">
      <StackLayout>
        <StackLayout>
          <Label
            col="0"
            row="0"
            class="font-bold text-blue-800 text-base text-center my-3"
            :text="count"
          />
          <Button
            col="0"
            row="1"
            class="bg-blue-200 text-blue-900 mx-8 mt-4 py-2 rounded"
            text=" + "
            @tap="increase()"
          />

          <Button
            col="0"
            row="1"
            class="bg-blue-200 text-blue-900 mx-8 mt-4 py-2 rounded"
            text=" - "
            @tap="decrease()"
          />
        </StackLayout>
        <StackLayout class="my-8">
           <ActivityIndicator busy="true" v-if="$apollo.queries.todos.error" class="text-red-900"
          width="50" height="50"
          />
          <ActivityIndicator busy="true" v-if="$apollo.queries.todos.loading" class="text-blue-900"
          width="50" height="50"
          />
          <ListView for="todo in todos" row="0" col="0" class="m-20">
            <v-template class="py-4">
              <Label :text="todo.title" :key="todo.id" class="py-4" />
            </v-template>
          </ListView>
        </StackLayout>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      todos: []
    };
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
      // pollInterval:500
      // update(data) {
      //   // This function returns our QUERY into the data property "items" when the component is loaded.
      //   console.log("First time returned data : ", data);
      //   //    return data.myschema_mytable;
      // }
      //   pollInterval:1000
    },
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
  created(){
    console.dir(this.$apollo.queries,{depth:null})
  },
  methods: {
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