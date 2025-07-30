import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from './ChatScreen'; // Adjust the import path as necessary

const ChatRoute = () => (
  <View style={{ flex: 1 }}>
    <ChatScreen />
  </View>
);

const CallRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Call Screen</Text>
  </View>
);

const renderScene = SceneMap({
  chat: ChatRoute,
  call: CallRoute,
});

export default function SwipeTabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chat', title: 'Chat', icon: 'chatbubble-ellipses-outline' },
    { key: 'call', title: 'Call', icon: 'call-outline' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderIcon={({ route, color, focused }) => {
        const currentRoute = props.navigationState.routes.find(r => r.key === route.key);
        return (
          <Ionicons
            name={currentRoute?.icon || 'help-circle-outline'}
            size={54}
            color="black"
          />
        );
      }}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        height: 70,
        left: 0,
        right: 0,
      }}
      labelStyle={{ color: 'black', fontSize: 12, marginTop: -4 }}
      activeColor="black"
      inactiveColor="gray"
    />
  );

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </>
  );
}
