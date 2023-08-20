import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getUser, getComments } from '../redux/selectors';
import { useDispatch } from 'react-redux';
import { createComment } from '../redux/operations';

import { Header } from '../Components/Header';
import { Comment } from '../Components/Comment';
import IconArrow from 'react-native-vector-icons/AntDesign';

const CommentsScreen = ({ route }) => {
  const [newComment, setNewComment] = useState('');
  const { uri } = useSelector(getUser);
  const comments = useSelector(getComments(route.params.post.id));
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const post = route.params.post;

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      return;
    }
    const comment = {
      uri: uri ?? null,
      text: newComment,
      date: new Date().getTime(),
    };
    dispatch(createComment({ comment, postId: post.id }));
    setNewComment('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <View style={styles.container}>
          <Header 
            pageTitle='Коментарі' 
            showBackButton={true}
            onBackButtonPress={() => navigation.goBack()}
          />
          <View
            style={{
              marginTop: 32,
              marginBottom: 'auto',
            }}
          >

          <ScrollView style={{ marginBottom: 100, paddingHorizontal: 10 }}>
            <ImageBackground
              source={{ uri: post.url }}
              style={styles.image}
            ></ImageBackground>

            {comments &&
              comments.map((comment, index) => (
                <Comment
                  key={index}
                  index={index}
                  avatar={comment.uri}
                  text={comment.text}
                  date={comment.date}
                />
              ))}
          </ScrollView> 
            
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder='Коментувати...'
              placeholderTextColor='#BDBDBD'
              value={newComment}
              onChangeText={setNewComment}
            />
            <Pressable onPress={handleAddComment}>
              <View style={styles.icon}>
                <IconArrow
                  name='arrowup'
                  size={14}
                  style={{
                    color: '#fff',
                  }}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    minHeight: 812,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 240,
    backgroundColor: '#bdbdbd',
    borderRadius: 8,
    marginBottom: 32,
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    textAlign: 'left',
    padding: 16,
    marginTop: 32,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    bottom: -8,
    right: 0,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    width: 34,
    height: 34,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommentsScreen;