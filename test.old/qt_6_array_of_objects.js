
file = arguments[0];
dir = file.split('/').slice(0, -1).join('/');
load(dir + '/base.js');


// 0

// array of objects

var te0 =
  [ 'group', { 'id': 'customers.' }, [
    [ 'group', {}, [
      [ 'text_input', { 'label': 'name', 'id': '.name' }, [] ],
      [ 'text_input', { 'label': 'age', 'id': '.age' }, [] ]
    ] ] ] ];
var data = {
  'customers': [
     { 'name': 'john', 'age': '30' },
     { 'name': 'jami', 'age': '29' } ] };

var teu =
  [ 'group', { 'id': 'customers.' }, [
    [ 'group', {}, [
      [ 'text_input', { 'label': 'name', 'id': '.name', 'value': 'john' }, [] ],
      [ 'text_input', { 'label': 'age', 'id': '.age', 'value': '30' }, [] ]
    ] ],
    [ 'group', {}, [
      [ 'text_input', { 'label': 'name', 'id': '.name', 'value': 'jami' }, [] ],
      [ 'text_input', { 'label': 'age', 'id': '.age', 'value': '29' }, [] ]
    ] ] ] ];

assertEqual(teu, render_and_serialize(te0, data, { 'mode': 'use' } ));
assertEqual(teu, render_and_serialize(te0, data, { 'mode': 'view' } ));

assertEqual(te0, render_and_serialize(te0, data, { 'mode': 'edit' } ));

assertEqual(data, render_and_produce(te0, data));
