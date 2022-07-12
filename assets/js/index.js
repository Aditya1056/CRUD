
$(".add_user").submit(function(event){
    alert("Data Added Successfully!");
})
$(".update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    // console.log(unindexed_array);
    var data = {};
    $.map(unindexed_array,function(n){
        data[n['name']] = n['value'];
    })
    // console.log(data);
    var request={
        "url":`https://crud-user-management-portal.herokuapp.com/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
        window.location='/';
    })
})


if(window.location.pathname =="/"){
    $ondelete = $("a.delete_user");
    $ondelete.click(function(event){
        var id = $(this).attr("user_id");
        var request={
            "url":`https://crud-user-management-portal.herokuapp.com/api/users/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do you really want to delete this user?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                window.location.reload();
            })

        }
    })
}