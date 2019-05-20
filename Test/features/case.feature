Feature: Working with Cases

@CreateCase
Scenario Outline: Create Case
  
  Given I am on "<QuinC>" page
  When Login to QuinC with "<credentials>"
  When I clicked on process data
  When I entered case name "<case>"
  Then I log out

  Examples:
    | QuinC                                       |  credentials       |  case      |
    |  http://offshr1-win10:4443/LoginPage.html   |  admin             |  case1002  |