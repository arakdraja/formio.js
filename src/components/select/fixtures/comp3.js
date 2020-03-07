export default {
    'label': 'Select',
    'labelPosition': 'top',
    'widget': 'choicesjs',
    'placeholder': '',
    'description': '',
    'tooltip': '',
    'customClass': '',
    'tabindex': '',
    'hidden': false,
    'hideLabel': false,
    'autofocus': false,
    'disabled': false,
    'tableView': true,
    'modalEdit': false,
    'multiple': true,
    'dataSrc': 'values',
    'data': {
      'values': [{
        'value': 'cat',
        'label': 'cat'
      }, {
        'label': 'dog',
        'value': 'dog'
      }, {
        'label': 'hamster',
        'value': 'hamster'
      }],
      'resource': '',
      'json': '',
      'url': '',
      'custom': ''
    },
    'valueProperty': '',
    'dataType': '',
    'template': '<span>{{ item.label }}</span>',
    'searchEnabled': true,
    'selectThreshold': 0.3,
    'readOnlyValue': false,
    'customOptions': {},
    'persistent': true,
    'protected': false,
    'dbIndex': false,
    'encrypted': false,
    'clearOnHide': true,
    'customDefaultValue': '',
    'calculateValue': '',
    'calculateServer': false,
    'allowCalculateOverride': false,
    'validateOn': 'change',
    'validate': {
      'required': false,
      'customMessage': '',
      'custom': '',
      'customPrivate': false,
      'json': '',
      'strictDateValidation': false,
      'multiple': true,
      'unique': false
    },
    'unique': false,
    'errorLabel': '',
    'key': 'select1',
    'tags': [],
    'properties': {},
    'conditional': {
      'show': null,
      'when': null,
      'eq': '',
      'json': ''
    },
    'customConditional': '',
    'logic': [],
    'attributes': {},
    'overlay': {
      'style': '',
      'page': '',
      'left': '',
      'top': '',
      'width': '',
      'height': ''
    },
    'type': 'select',
    'indexeddb': {
      'filter': {}
    },
    'selectFields': '',
    'searchField': '',
    'minSearch': 0,
    'filter': '',
    'limit': 100,
    'refreshOn': '',
    'redrawOn': '',
    'input': true,
    'prefix': '',
    'suffix': '',
    'showCharCount': false,
    'showWordCount': false,
    'allowMultipleMasks': false,
    'clearOnRefresh': false,
    'lazyLoad': true,
    'authenticate': false,
    'searchThreshold': 0.3,
    'fuseOptions': {
      'include': 'score',
      'threshold': 0.3
    }
  };

// export const resource = {
//   'type': 'resource',
//   'components': [{
//     'label': 'Number',
//     'labelPosition': 'top',
//     'placeholder': '',
//     'description': '',
//     'tooltip': '',
//     'prefix': '',
//     'suffix': '',
//     'widget': {
//       'type': 'input'
//     },
//     'customClass': '',
//     'tabindex': '',
//     'hidden': false,
//     'hideLabel': false,
//     'mask': false,
//     'autofocus': false,
//     'spellcheck': true,
//     'disabled': false,
//     'tableView': false,
//     'modalEdit': false,
//     'multiple': false,
//     'persistent': true,
//     'delimiter': false,
//     'requireDecimal': false,
//     'inputFormat': 'plain',
//     'protected': false,
//     'dbIndex': false,
//     'encrypted': false,
//     'redrawOn': '',
//     'clearOnHide': true,
//     'customDefaultValue': '',
//     'calculateValue': '',
//     'calculateServer': false,
//     'allowCalculateOverride': false,
//     'validateOn': 'change',
//     'validate': {
//       'required': false,
//       'customMessage': '',
//       'custom': '',
//       'customPrivate': false,
//       'json': '',
//       'min': '',
//       'max': '',
//       'strictDateValidation': false,
//       'multiple': false,
//       'unique': false,
//       'step': 'any',
//       'integer': ''
//     },
//     'errorLabel': '',
//     'key': 'number',
//     'tags': [],
//     'properties': {},
//     'conditional': {
//       'show': null,
//       'when': null,
//       'eq': '',
//       'json': ''
//     },
//     'customConditional': '',
//     'logic': [],
//     'attributes': {},
//     'overlay': {
//       'style': '',
//       'page': '',
//       'left': '',
//       'top': '',
//       'width': '',
//       'height': ''
//     },
//     'type': 'number',
//     'input': true,
//     'unique': false,
//     'refreshOn': '',
//     'showCharCount': false,
//     'showWordCount': false,
//     'allowMultipleMasks': false,
//     'id': 'ekyk3a',
//     'defaultValue': null
//   }
//   ]
// };

// export function getSelectScheme(resourceId) {
//   return {
//     'label': 'Select',
//     'widget': 'choicesjs',
//     'tableView': true,
//     'multiple': true,
//     'dataSrc': 'resource',
//     'data': {
//       'values': [{
//         'value': ''
//       }],
//       'resource': `${resourceId}`,
//       'json': '',
//       'url': '',
//       'custom': ''
//     },
//     'valueProperty': 'data.number',
//     'dataType': 'number',
//     'template': '<span>{{ item.data.number }}</span>',
//     'selectThreshold': 0.3,
//     'calculateServer': false,
//     'validate': {
//       'multiple': true,
//       'select': false,
//       'required': false,
//       'custom': '',
//       'customPrivate': false,
//       'strictDateValidation': false,
//       'unique': false
//     },
//     'key': 'select',
//     'type': 'select',
//     'indexeddb': {
//       'filter': {}
//     },
//     'searchField': 'data.number__regex',
//     'input': true,
//     'addResource': false,
//     'reference': false,
//     'placeholder': '',
//     'prefix': '',
//     'customClass': '',
//     'suffix': '',
//     'defaultValue': null,
//     'protected': false,
//     'unique': false,
//     'persistent': true,
//     'hidden': false,
//     'clearOnHide': true,
//     'refreshOn': '',
//     'redrawOn': '',
//     'modalEdit': false,
//     'labelPosition': 'top',
//     'description': '',
//     'errorLabel': '',
//     'tooltip': '',
//     'hideLabel': false,
//     'tabindex': '',
//     'disabled': false,
//     'autofocus': false,
//     'dbIndex': false,
//     'customDefaultValue': '',
//     'calculateValue': '',
//     'attributes': {},
//     'validateOn': 'change',
//     'conditional': {
//       'show': null,
//       'when': null,
//       'eq': ''
//     },
//     'allowCalculateOverride': false,
//     'encrypted': false,
//     'showCharCount': false,
//     'showWordCount': false,
//     'properties': {},
//     'allowMultipleMasks': false,
//     'clearOnRefresh': false,
//     'limit': 100,
//     'lazyLoad': true,
//     'filter': '',
//     'searchEnabled': true,
//     'minSearch': 0,
//     'readOnlyValue': false,
//     'authenticate': false,
//     'selectFields': '',
//     'searchThreshold': 0.3,
//     'fuseOptions': {
//       'include': 'score',
//       'threshold': 0.3
//     }
//   }
// };
