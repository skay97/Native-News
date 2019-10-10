# Native-News
Native News is a news application built with React Native. The app uses NewsApi.org to fetch(pun intended - will refactor to use Axios in the future :bowtie:) news articles and 
Publisher information. I also used NativeBase as my UI framework to enhance my interface.

# App Functionality
Here is a breakdown of what the app contains:
- Three separate views: Headlines, Tech & Business
- Loading state for individual views
- Capability to read an entire article in `webView` by pressing the 'View' opacity
- ability to share news articles with people

# App Demo
## App loading and individual views
![Nn-loading](https://user-images.githubusercontent.com/44034677/66578386-9e6eb300-eb40-11e9-85aa-d65aae5f39ca.gif)
## Article view
![nativeNews-article](https://user-images.githubusercontent.com/44034677/66580520-27d3b480-eb44-11e9-8931-b0d5c743793b.gif)

# Installation
If you have not developed with React Native before, I highly recommend visiting the [React Native Docs](https://facebook.github.io/react-native/docs/getting-started) to get better acquainted with the setup process using the  React Native CLI tools.
Once you have followed the steps for your first time set up as noted above, please follow the steps below:
- run `sudo gem install cocoapods`
- cd into the ios folder & `pod install`
- cd back into nativeNews
- run `npm install`
- `react-native run-ios --simulator=“iPhone 11”`. Dependant on your version of Xcode, there may be an unresolved bug that defaults to starting the simulator on an iPhone X resulting in an error that states no iPhone X can be found. This is probably because the iPhone X simulator isn't downloaded on your Xcode. You can either download it and run `react-native run-ios` or start the app on a specific simulator as mentioned above.
 
# Xcode Troubleshooting
 - Make sure you have your team specified in Xcode. If you do not, please open `nativeNews.xcworkspace` in Xcode, navigate to native to the folder icon located under the Play icon > nativeNews > signing and capabilities > All > Add yourself to the team.
- Article to help resolve the [xcrun error]( https://medium.com/codespace69/react-native-xcrun-error-unable-to-find-utility-simctl-not-a-developer-tool-or-in-path-bd908d3551be).

#  Metro Bundler Troubleshooting
- `killall -9 node`
- `rm -rf node_modules`
- `npm cache clean`
- `npm install`
- `react-native run-ios` or `react-native run-ios --simulator= of your choice`
