// RCTCalendarModule.m
#import "RCTStatsModule.h"
#import <React/RCTLog.h>

@implementation RCTStatsModule

// To export a module named RCTStatsModule
RCT_EXPORT_METHOD(checkForPermission:(RCTResponseSenderBlock)callback)
{
    // Prepare the stats or error message
    id statsOrError = @"Permission Denied";
    
    // Callback to the JavaScript side
    callback(@[[NSNull null], statsOrError]);
}

// Export the method to JavaScript
RCT_EXPORT_MODULE();

@end
