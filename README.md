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
- link (a[href])
- header
- section
- footer
- strong
- span
- i
- div
- image (img[src]): src
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
this.input({onkeyup: handleKeyup, onmousedown: handleClick, name: 'name'})

// <input type="text" name="name" onkeyup="handleKeyup()" onmousedown="handleClick()"/>
```

#### Tương tự jQuery

- html
- append
- prepend
- data
- val
- text
- css
- attr
- removeAttr
- show
- hide
- toggle
- hasClass
- addClass
- removeClass
- is
- has
- parent
- children
- find
- lastChild
- firstChild
- next
- prev

* Lưu ý:

```javascript
// children có thể được đặt ngầm
this.button({node: 'button_name', className: 'btn'}, 'Click Me')

// <button>Click Me</button>
// Khi gọi

form.children('button')
// or
form.children('button_name')
// or 
form.children('.btn')

// Vì mục đích dùng lại nhiều lần nên mình đã cache nó lại.
// Tuy nhiên có những lúc cache kết quả thì nó lại sai, cho nên mình có tạo hàm find để khắc phục vấn đề này.
```

#### Thêm và sửa một số tính năng

- changeClass(oldClassName, newClassName)
- disable(value)
- check(value): using for input[type="checkbox"]
- select(value)
- insertBefore
- insertAfter
- set(key, value)
- unset
- reset
- incrby
- get
- call

```javascript
// disable, check, select
var btn = form.children('button');
btn.disable(true);

btn.disable(false);

var disabled = btn.disable(); // true or false

// <input type="text" name="text" class="form-control">
// <button type="submit">Post</button>

var show_upload = $.create({
	render: function(){
		return(
			this.div({class: 'clearfix'},
				this.image('src')
			)
		)
	}
});

show_upload.insertAfter(btn); // show_upload insert phía sau btn

// <input type="text" name="text" class="form-control">
// <button type="submit">Post</button>
// <div class="clearfix"><img src="src"></div>

// or
show_upload.insertBefore(dom.children('.form-control')); // show_upload thêm vào trước thẻ input[type="text"]

// <div class="clearfix"><img src="src"></div>
// <input type="text" name="text" class="form-control">
// <button type="submit">Post</button>
```

* Vì mục đích sử dụng lại nên mình có thêm các hàm như set, unset, get, reset, incrby, call 
để có thể dễ dàng làm việc với các chức năng realtime như: like, comment.
Tuy nhiên còn rất nhiều trường hợp khác nữa mà khi sử dụng bạn mới biết được.
Ví dụ như dễ dàng làm chức năng chỉnh sửa bình luận, bài viết như facebook, ...

```javascript
function PostBox(post){
	var dom = $.create({
		data: {
			setLike: function(action, isMe){
				var countLike = action==='like'?(post.getCountLike()+1):(post.getCountLike-1);
				if(isMe){
					if(action==='like') dom.children('button_like').addClass('liked');
					else dom.children('button_like').removeClass('liked');
				};
				dom.children('count_like').html(countLike);
			}
		},
		button_like: function(){
			var data = {
				action: 'unlike',
				post_id: post.getId(), 
				user_id: cookie.get('user')
			};

			// Đếm số lần click like, để hạn chế spam
			dom.incrby('click_like', 1);

			if(dom.get('click_like')<5) socket.emit('like', data);
		},
		render: function(){
			return(
				this.div({className: 'post', data: {id: post.getId()}},
					this.div({className: 'post-text'}, post.getText()),
					this.div({className: 'post-count'}, 
						this.span({node: 'count_like'}, post.getCountLike())
					),
					this.div({className: 'post-btn'},
						this.button({node: 'button_like', onclick: this.button_like}, function(btn){
							if(post.liked()) btn.addClass('liked')
						})
					)
				)
			)
		}
	});
	return dom;
};
var socket = io.connect();
var user_cookie = cookie.get('user');
var content = $('#content');

content.append(PostBox(post));

socket.on('like', function(data){
	var dom_post = content.children('[data-id="'+data.post_id+'"]');
	if(dom_post){
		dom_post.call('setLike', data.action, data.user_id===user_cookie, data.count);
	}
});
```

* Làm việc với cookie:
```javascript
if(cookie.has('user')) alert(cookie.get('user'));

cookie.init({day: 1, path: '/'}).set({user: 1, name: 'Nguyen Van A'}); // set cookie trong 1 ngày
```

* Làm việc với routes tạo singgle page
```javascript
app.router('/', function(){
	if(!window.account_login){
		// load template here
		$.get('/asset/js/template/account/login.js', function(text){
			var script = document.createElement('script');
			script.innerHTML = text;
			document.querySelector('head').appendChild(script);
		}, false);
	};
	$('#content').html(window.account_login);
});
```
