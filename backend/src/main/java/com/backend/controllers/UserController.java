package com.backend.controllers;

import javax.inject.Inject;

import com.backend.entities.User;
import com.backend.services.UserService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Delete;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.http.annotation.Produces;
import io.micronaut.http.annotation.Put;

@Controller("/user")
public class UserController {

    /**
     *
     */
    @Inject
    UserService userService;

    /**
     *
     * @return
     */
    @Get("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Iterable<User> getAll() {
        return userService.getAllUsers();
    }

//    /**
//     *
//     * @param phone
//     * @return
//     */
//    @Get("/find/{phone}")
//    @Produces(MediaType.APPLICATION_JSON)
//    public User getUserByPhone(String phone) {
//        return userService.getUserByPhine(phone);
//    }

    /**
     *
     * @param user
     * @return
     */
    @Post("/saveUser")
    @Produces(MediaType.APPLICATION_JSON)
    public User saveOrUpdate(@Body User user) {
        return userService.saveOrupdateUser(user);
    }

}
