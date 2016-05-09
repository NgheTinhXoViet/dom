### Hướng dẫn sử dụng thư viện DomJS

#### Tạo 1 dom mới

```javascript
var form = $.create({
	submit_form: function(e){},
	render: function(){
		return(
			this.form({action: 'url', method: 'get', onsubmit: this.submit_form},
				this.input({className: 'form-control', name: 'text', placeholder: 'Press text here...'}),
				this.submit('Post')
			)
		)
	}
});

// append or innerHTML form into body:
$('body').append(form);

// or
$('body').html(form);
```

#### Các thẻ dom chủ yếu

- form
- button
- submit (button[type="submit"])
- input
- text (textarea)
- file (input[type="file"]): 2 arguments: event onchange, is multiple (true || false)
- hidden (input[type="hidden"]): 2 arguments: name, value, nodeName
- checkbox (input[type="checkbox"])
- redio (input[type="radio"]): name, value
- pass (input[type="password"]): placeholder, show (true || false) 
- email (input[name="email"]) placeholder
- select: name, list option
- label
- link (<a href>)
- header
- section
- footer
- strong
- span
- i
- div
- image (<img src>): src
- ul
- li
- table
- tr
- td

#### Ajax

```javascript
// get, post, put, delete, load
$.get(url, data, callback, async);

$.get('/url.php', {id: 1}, function(json){
	console.log(json);
});

$.get('/url.php', function(json){});
```


#### Thêm sự kiện cho dom

```javascript

```