### Hướng dẫn sử dụng thư viện DomJS

# Tạo 1 dom mới

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