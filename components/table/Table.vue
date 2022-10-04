<template>
  <div class="v-table-responsive">
    <table class="v-table">
      <thead>
        <tr>
          <th v-for="element in headingList" :key="element.name">
            {{ element }}
          </th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="suggestion in suggestionList" :key="suggestion.id">
          <td>{{ suggestion.name }}</td>
          <td>{{ suggestion.email }}</td>
          <td v-if="suggestion.parent">{{ suggestion.parent }}</td>
          <td v-if="suggestion.bio">{{ suggestion.bio.substring(0, 22) }}...</td>
          <td v-if="suggestion.phone">{{ suggestion.phone }}</td>
          <td>{{ suggestion.state }}</td>
          <td>
            <button @click.stop="$emit('editData', suggestion.id)">
              <font-awesome-icon icon="fa-solid fa-pen" color="#4F4F4F" />
            </button>
          </td>
          <td>
            <button @click.stop="$emit('removeData', suggestion.id)">
              <font-awesome-icon icon="fa-solid fa-trash-can" color="#4F4F4F" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface ITableSuggestionProp {
  code: string
  id: string
  name: string
  email: string
  parent?: string
  phone?: string
  password: string
  state: string
  bio?: string
}

interface ITableHeadingProp {
  name?: string
}

export default Vue.extend({
  name: 'CTable',
  props: {
    suggestionList: {
      type: Array as PropType<ITableSuggestionProp[]>,
      default: () => [],
    },
    headingList: {
      type: Array as PropType<ITableHeadingProp[]>,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/lib/mixin';
@import '@/assets/sass/lib/var';
.v-table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }
}
.v-table {
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  @include mediaQueriesMd() {
    width: max-content;
    max-width: max-content;
  }

  tr {
    height: 94px;
  }
  th {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: $color-grey;
  }
  td {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: $color-grey;
    padding: 20px 0;
    border-bottom: 1px solid $color-grey-medium;

    &:nth-child(1) {
      padding-left: 20px;
    }
    &:nth-last-child(1) {
      width: 40px;
      background-color: $color-lightin;
      text-align: center;
      border-bottom: 1px solid $color-lightin;
      button {
        width: 100%;
      }
    }
    &:nth-last-child(2) {
      padding-left: 20px;
    }
    &:nth-last-child(3) {
      color: $color-active;
    }
    &:nth-last-child(3).desactive {
      color: $color-danger;
    }
  }
  th,
  td {
    @include mediaQueriesMd() {
      font-size: 16px;
      line-height: 22px;
      padding: 20px;
    }
  }
  tbody > tr:nth-child(odd) {
    background-color: $color-lightgrey;
  }
}
</style>