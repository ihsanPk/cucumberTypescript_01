Feature: Login To QuinC

@Login
Scenario Outline: Login to QuinC
  
  Given I am on "<QuinC>" page
  When Login to QuinC with "<credentials>"
  When I clicked on process data
  Then I log out

  Examples:
    | QuinC                                       |  credentials       |  
    |  http://offshr1-win10:4443/LoginPage.html   |  admin             | 
    |  http://offshr1-win10:4443/LoginPage.html   |  CR1user           | 

# @CreateCase
# Scenario Outline: Create Case
  
#   Given I am on "<QuinC>" page
#   When I entered "<credentials>"
#   When I clicked on process data
#   When I entered case name "<Password>"
#   Then I log out
# #   Then I click on search button
# #   Then I clear the search text

#   Examples:
#     | QuinC                                       |  credentials       |  Password  |
#     |  http://offshr1-win10:4443/LoginPage.html   |  admin             |  abc123    |