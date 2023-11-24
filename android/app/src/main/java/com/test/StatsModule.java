package com.test;

import android.app.Activity;
import android.app.AppOpsManager;
import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

import android.os.Process;

import java.util.Calendar;
import java.util.List;

public class StatsModule extends ReactContextBaseJavaModule {

    public StatsModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "StatsModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback callback) {
        // Your implementation for creating a calendar event
    }

    @ReactMethod
    public void checkForPermission(Callback callback) {
        boolean hasPermission = false;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            AppOpsManager appOps = (AppOpsManager) getReactApplicationContext().getSystemService(Context.APP_OPS_SERVICE);
            int mode = appOps.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, Process.myUid(), getReactApplicationContext().getPackageName());
            hasPermission = mode == AppOpsManager.MODE_ALLOWED;

            if (hasPermission) {
                UsageStatsManager usageStatsManager = (UsageStatsManager) getReactApplicationContext().getSystemService(Context.USAGE_STATS_SERVICE);
                if (usageStatsManager != null) {
                    Calendar calendar = Calendar.getInstance();
                    long endTime = calendar.getTimeInMillis();
                    calendar.add(Calendar.DAY_OF_MONTH, -1); // Fetch stats for the last 1 day
                    long startTime = calendar.getTimeInMillis();

                    List<UsageStats> stats = usageStatsManager.queryUsageStats(
                            UsageStatsManager.INTERVAL_DAILY, startTime, endTime);

                    if (stats != null) {
                        WritableArray statsArray = Arguments.createArray();
                        for (UsageStats usageStats : stats) {
                            String packageName = usageStats.getPackageName();
                            long totalUsageTime = usageStats.getTotalTimeInForeground();

                            // Create a map to store package name and usage stats
                            WritableMap appStats = Arguments.createMap();
                            appStats.putString("packageName", packageName);
                            appStats.putDouble("totalUsageTime", totalUsageTime);

                            // Add this map to the stats array
                            statsArray.pushMap(appStats);
                        }

                        // Invoke the callback with the usage stats array
                        callback.invoke(statsArray, null);
                        return;
                    }
                }
            }
            else {
                Activity currentActivity = getCurrentActivity();
                if (currentActivity != null) {
                    currentActivity.startActivity(new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS));
                    return;
                }
            }
        }

        // If there's an error or no stats available, return null to the callback
        callback.invoke(null, "Error fetching usage stats");
    }
}