<template>
  <div>
        <ul>
            <Item class="Item" :model="treeData"></Item>
        </ul>
  </div>
</template>
<script>
import Item from "./Item";
export default {
  name: "tree",
  components: {
    Item
  },
  data() {
    return {
      treeData: {
        title: "web前端",
        children: [
          {
            title: "H5工程师"
          },
          {
            title: "js工程师",
            children: [
              {
                title: "es6"
              },
              {
                title: "es7"
              },
              {
                title: "es8"
              },
              {
                title: "es9"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>