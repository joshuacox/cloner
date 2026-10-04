# Minimum CMake version required
cmake_minimum_required(VERSION 3.14)

project(cloner)

# Specify the script file to be installed
set(CLONER_NAME "cloner")
set(CLONER_PATH "${CMAKE_CURRENT_SOURCE_DIR}/${CLONER_NAME}")

# Install the script to a destination directory
install(PROGRAMS ${CLONER_PATH} 
    DESTINATION bin
    PERMISSIONS OWNER_READ OWNER_WRITE OWNER_EXECUTE GROUP_READ GROUP_EXECUTE WORLD_READ WORLD_EXECUTE
)

# Install the man page with proper section handling
install(
    FILES ${CMAKE_CURRENT_SOURCE_DIR}/man/cloner.1
    DESTINATION share/man/man1
    COMPONENT Runtime
)

# Install shell completions
install(
    FILES ${CMAKE_CURRENT_SOURCE_DIR}/completions/cloner.bash
    DESTINATION share/bash-completion/completions
    RENAME cloner
)

install(
    FILES ${CMAKE_CURRENT_SOURCE_DIR}/completions/_cloner
    DESTINATION share/zsh/site-functions
)

# Add uninstall target
add_custom_target(uninstall
    COMMAND ${CMAKE_COMMAND} -E remove -f
        "${CMAKE_INSTALL_PREFIX}/bin/${CLONER_NAME}"
        "${CMAKE_INSTALL_PREFIX}/share/man/man1/cloner.1"
        "${CMAKE_INSTALL_PREFIX}/share/bash-completion/completions/cloner"
        "${CMAKE_INSTALL_PREFIX}/share/zsh/site-functions/_cloner"
    COMMENT "Uninstalling cloner binary, man page, and completions from ${CMAKE_INSTALL_PREFIX}"
)

# --------------------------------------------------------------
# Make the install prefix visible to the user (helpful for packaging)
# --------------------------------------------------------------
message(STATUS "Install prefix: ${CMAKE_INSTALL_PREFIX}")
message(STATUS "Binary will be installed to: ${CMAKE_INSTALL_PREFIX}/bin")
message(STATUS "Man page will be installed to: ${CMAKE_INSTALL_PREFIX}/share/man/man1")
message(STATUS "Bash completion will be installed to: ${CMAKE_INSTALL_PREFIX}/share/bash-completion/completions/cloner")
message(STATUS "Zsh completion will be installed to: ${CMAKE_INSTALL_PREFIX}/share/zsh/site-functions/_cloner")
