package hackathon2023.smuziHlebi.utils.data;

import hackathon2023.smuziHlebi.domain.entity.Role;
import hackathon2023.smuziHlebi.domain.entity.User;
import hackathon2023.smuziHlebi.repository.RoleRepository;
import hackathon2023.smuziHlebi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {

    boolean alreadySetup = false;

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
        if (alreadySetup){
            return;
        }

        createRoleNotFound("ROLE_PARTICIPANT");
    }

  @Transactional
  public void createRoleNotFound(String name){
      Optional<Role> role = roleRepository.findByName(name);
      if (role.isEmpty()){
          Role roleToSave = new Role();
          roleToSave.setName(name);
          roleRepository.save(roleToSave);
      }
  }
}
