package com.backend.services;

import com.backend.entities.User;
import com.backend.repositories.UserRepository;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class UserService {

    @Inject
    UserRepository userRepository;

    /**
     *
     * @return
     */
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

//    /**
//     *
//     */
//    public User getUserByPhine(String phone) {
//        return userRepository.findByUserPhone(phone);
//    }

    /**
     *
     * @param user
     * @return
     */
    public User saveOrupdateUser(User user) {
        User userSaved = null;
        if (user.getId() != null &&   userRepository.existsById(user.getId())) {
            userSaved = userRepository.update(user);
        }
        else {
            userSaved = userRepository.save(user);
        }
        return userSaved;
    }
}
