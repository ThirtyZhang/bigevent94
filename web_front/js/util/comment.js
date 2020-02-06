var comment = {
    /**
     * 给文章添加评论
     * 
     * @param {*} name 游客名
     * @param {*} content 评论的内容
     * @param {*} article_id 评论的文章编号
     */
    add: function(name,content,article_id){
        return $.post(APILIST.comment_add,{
            'name': name,
            'content': content,
            'article_id':article_id
        })
    }
}