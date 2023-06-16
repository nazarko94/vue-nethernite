<template>
  <div>
    <div class="modal fade" id="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Desription
              <strong></strong>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="cross">X</span>
            </button>
          </div>
          <div class="modal-body">
            <div>name: <strong>{{ SELECTED_POST.name }}</strong></div>
            <div>
              description: <strong>{{ SELECTED_POST.description }}</strong>
            </div>
            <div>
              repository: <strong>{{ SELECTED_POST.repository.url }}</strong>
            </div>
            <div>
              user: <strong>{{ SELECTED_POST.repository.user }}</strong>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Modal",
  computed: {
    ...mapGetters([
        'SELECTED_POST'
    ])
  }
}
</script>
