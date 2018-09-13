export default {
  form: `
<div class="row">
  <div class="col col-sm-6">
    <p class="lead">{{componentInfo.title}} {{t('Component')}}</p>
  </div>
  <div class="col col-sm-6">
    <div class="float-right" style="margin-right: 20px; margin-top: 10px">
      <a href="{{componentInfo.documentation}}" target="_blank">
        <i class="{{iconClass('new-window')}}"> {{t('Help')}}</i>
      </a>
    </div>
  </div>
</div>
<div class="row">
  <div class="col col-sm-6">
    <div ref="editForm">
        {{editForm}}
    </div>
  </div>
  <div class="col col-sm-6">
    <div class="card panel preview-panel">
      <div class="card-header">
        <h4 class="card-title mb-0">{{t('Preview')}}</h4>
      </div>
      <div class="card-body">
        <div class="component-preview" ref="preview">
          {{preview}}
        </div>
      </div>
    </div>
    <div style="margin-top: 10px;">
      <button class="btn btn-success" style="margin-right: 10px;" ref="saveButton">{{t('Save')}}</button>
      <button class="btn btn-secondary" style="margin-right: 10px;" ref="cancelButton">{{t('Cancel')}}</button>
      <button class="btn btn-danger" ref="removeButton">{{t('Remove')}}</button>
    </div>
  </div>
</div> 
`,
};
