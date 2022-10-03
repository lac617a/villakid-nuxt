<template>
  <div class="v-table-responsive">
    <table class="v-table">
      <thead>
        <tr>
          <th scope="col">Nombre Alumnos</th>
          <th scope="col">Correo</th>
          <th scope="col">Padre/apoderado</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Estado</th>
          <th scope="col">Editar</th>
          <th scope="col"></th>
        </tr>
      </thead>
  
      <tbody>
        <tr v-for="suggestion in suggestionList" :key="suggestion.id">
          <td>{{ suggestion.name }}</td>
          <td>{{ suggestion.email }}</td>
          <td>{{ suggestion.parent }}</td>
          <td>{{ suggestion.phone }}</td>
          <td>{{ suggestion.state }}</td>
          <td>
            <button @click.stop="$emit('edit', suggestion.id)">
              <font-awesome-icon icon="fa-solid fa-pen" color="#4F4F4F" />
            </button>
          </td>
          <td>
            <button @click.stop="$emit('remove', suggestion.id)">
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

interface ITableStudentProp {
  id: string
  name: string
  email: string
  parent: string
  phone: string
  state: string
}

export default Vue.extend({
  name: 'TableStudent',
  props: {
    suggestionList: {
      type: Array as PropType<ITableStudentProp[]>,
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
    color: #333333;
  }
  td {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
    padding: 20px 0;
    border-bottom: 1px solid #e0e0e0;

    &:nth-child(1) {
      padding-left: 20px;
    }
    &:nth-last-child(1) {
      width: 40px;
      background-color: #fff;
      text-align: center;
      border-bottom: 1px solid #fff;
      button {
        width: 100%;
      }
    }
    &:nth-last-child(2) {
      padding-left: 20px;
    }
    &:nth-last-child(3) {
      color: #219653;
    }
    &:nth-last-child(3).desactive {
      color: red;
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
    background-color: #f6f6f6;
  }
}
</style>