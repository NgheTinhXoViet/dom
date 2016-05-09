function form_post(user){
	// user is a model
	var dom = $.create({
		submit_form: function(e){},
		show_footer: function(){
			dom.children('footer').show();
		},
		render: function(){
			return(
				this.div({className: 'row', id: 'form_post'},
					this.form({className: 'form form-post', method: 'post', file: true, onsubmit: this.submit_form},
						/* header */
						this.header({className: 'relative'},
							this.span({className: 'absolute form-avatar'}, 
								this.image(user.avatar)
							),
							this.span({className: 'absolute form-text'},
								this.text({
									className: 'input-text', 
									placeholder: 'What\'s your mind?', 
									name: 'content',
									onmousedown: this.show_footer
								})
							)
						),
						/* section */
						this.section({className: 'clearfix'}),

						/* footer */
						this.footer({className: 'clearfix'},

							/* button add photo */
							this.button({className: 'btn btn-default btn-sm pull-left'},
								this.glyphicon('glyphicon-picture'),
								this.file(true/* multiple: true */)
							),

							/* submit button */
							this.submit({className: 'btn btn-primary btn-sm pull-right form-btn'}, 'Post'),

							/* choose role */
							this.button({className: 'btn btn-default btn-sm pull-right relative form-hide'},
								this.span('Public')
							)
						)
					)
				)
			)
		}
	});
	return dom;
};