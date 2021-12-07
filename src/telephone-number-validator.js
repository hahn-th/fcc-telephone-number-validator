function telephoneCheck(str) {
    const regex = /^(1(\s|-)?)?(\d{3}|\(\d{3}\))(\s|-)?\d{3}(\s|-)?\d{4}$/;
    const match = str.match(regex);
    return (null != match);
  }
  
  console.log(true===telephoneCheck("5555555555"));
  console.log(true===telephoneCheck("555-555-5555"));
  console.log(true===telephoneCheck("1-555-555-5555"));
  console.log(true===telephoneCheck("555 555 5555"));
  console.log(true===telephoneCheck("1 555 555 5555"));
  console.log(false===telephoneCheck("555-5555"));
  console.log(false===telephoneCheck("5555555"));
  console.log(true===telephoneCheck("1 (555) 555-5555"));
  console.log(true===telephoneCheck("(555)555-5555"));
  console.log(true===telephoneCheck("1(555)555-5555"));
  console.log(true===telephoneCheck("1 (555) 555-5555"));
  console.log(true===telephoneCheck("1 (555) 555-5555"));
  console.log(false===telephoneCheck("(6054756961)"));
  console.log(false===telephoneCheck("2 (757) 622-7382"));
  console.log(false===telephoneCheck("0 (757) 622-7382"));
  console.log(false===telephoneCheck("-1 (757) 622-7382"));
  console.log(false===telephoneCheck("2 757 622-7382"));
  console.log(false===telephoneCheck("10 (757) 622-7382"));
  console.log(false===telephoneCheck("27576227382"));
  console.log(false===telephoneCheck("(275)76227382"));
  console.log(false===telephoneCheck("2(757)6227382"));
  console.log(false===telephoneCheck("2(757)622-7382"));