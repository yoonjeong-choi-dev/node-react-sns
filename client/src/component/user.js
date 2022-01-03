import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IMAGE_ENDPOINT, API_ENDPOINT } from '../config.dev';


const Container = styled.div`
  width: 100%;
  height: 150px;
`;
const Left = styled.div`
  width: 40%;
  height: 100%;
  float: left;
`;
const Right = styled.div`
  width: 60%;
  float: right;
  float: 100%;
`;

const ProfileImage = styled.img`
  height: 100%;
  min-width: 80px;
  border-radius: 100%;
`;

const RightRow = styled.div`
  height: ${props => props.height};
  line-height: ${props => props.height};
  text-align: left;
  margin-bottom: 5px;
`;

const Personal = styled.div`
  line-height: 16px;
  font-size: 16px;
  margin-right:30px;
  float: left;
`

const User = () => {
  const [user, setUser] = useState({});

  // 임시 코드
  useEffect(async () => {
    const res = await axios.get(API_ENDPOINT+'/user.json');
    console.log(res);
    setUser(res.data);
  }, []);

  return (
    <Container>
      <Left>
        <ProfileImage src={IMAGE_ENDPOINT+user.profile_image}/>
      </Left>
      <Right>
        <RightRow height='40px'>
          {user.id}
        </RightRow>
        <RightRow height='18px'>
          <Personal>게시물 <strong>{user.posts}</strong></Personal>
          <Personal>팔로워 <strong>{user.followers}</strong></Personal>
          <Personal>팔로잉 <strong>{user.followings}</strong></Personal>
        </RightRow>
        <RightRow height='24px'>
          <div>{user.nickname}</div>
          <div>{user.discription}</div>
        </RightRow>
      </Right>
    </Container>
  );
}

export default User;