export const updateUserName = (username) => {
  return  {
      type: 'updateUsername',
      playLoad: {username},
  };
};

export const updatePassword = (password) => {
  return {
      type: 'updatePassword',
      playLoad: {password},

  };
};
