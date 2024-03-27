import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Page = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isMuted
          isLooping
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View style={{ padding: 20, marginTop: 80 }}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.buttons}>
        <Link
          href={'/login'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
          asChild
        >
          <Pressable>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>
              Log in
            </Text>
          </Pressable>
        </Link>
        <Link
          href={'/signup'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: '#fff' },
          ]}
          asChild
        >
          <Pressable>
            <Text style={{ color: 'black', fontSize: 22, fontWeight: '500' }}>
              Sign up
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  video: { width: '100%', height: '100%', position: 'absolute' },
  header: {
    fontSize: 36,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: '900',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});
