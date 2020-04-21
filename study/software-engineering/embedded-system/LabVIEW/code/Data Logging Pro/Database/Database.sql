
/**********************************************************************************************/
/*Tables.sql*/
/**********************************************************************************************/

/*
Data Management and Monitoring (DMM) Tables

These Tables can be used for Logging Process and Measurement Data, Home Automation Data, etc.

The Database can be local, in a network, on Internet or part of a Data Cloud Service

(C) Hans-Petter Halvorsen

Last Updated: 2016.06.03

*/



if not exists (SELECT name 
   from   sysobjects 
   where  name = 'CONFIGURATION' 
   and   type = 'U')
CREATE TABLE CONFIGURATION
( 
	ConfigurationId		int  NOT NULL  IDENTITY ( 1,1 ) Primary Key ,
	Section				varchar(20)  NOT NULL ,
	ConfigurationName	varchar(20)  NOT NULL ,
	DataType			int  NOT NULL ,
	StringValue			varchar(100)  NULL ,					
	NumericValue		float  NULL ,
	BooleanValue		bit  NULL ,
	Comment				varchar(255)  NULL ,
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'UNIT' 
   and   type = 'U')
CREATE TABLE UNIT
( 
	UnitId           int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	UnitName         varchar(100)  NOT NULL  UNIQUE,
	Comment          varchar(255)  NULL,
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'ACCESSLEVEL' 
   and   type = 'U')
CREATE TABLE ACCESSLEVEL
( 
	AccessLevelId        int  NOT NULL  IDENTITY ( 1,1 ) Primary Key,
	AccessName           varchar(100)  NOT NULL UNIQUE,
	Comment				 varchar(255)  NULL, 
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'USERDATA' 
   and   type = 'U')
CREATE TABLE USERDATA
( 
	UserId               int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	UserName             varchar(100)  NOT NULL UNIQUE,
	Email                varchar(100)  NULL,
	Pwd					 varchar(100)  NULL,
	Comment				 varchar(255)  NULL,
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'USERACCESS' 
   and   type = 'U')
CREATE TABLE USERACCESS
(
	UserAccessId         int  NOT NULL IDENTITY ( 1,1 ) Primary Key, 
	UserId               int  NOT NULL FOREIGN KEY (UserId) REFERENCES USERDATA(UserId),
	AccessLevelId        int  NOT NULL FOREIGN KEY (AccessLevelId) REFERENCES ACCESSLEVEL(AccessLevelId),
)
go



/* ----------- Device Tables ----------- */



if not exists (SELECT name 
   from   sysobjects 
   where  name = 'LOCATION' 
   and   type = 'U')
CREATE TABLE LOCATION
( 
	LocationId           int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	LocationName         varchar(100)  NOT NULL  UNIQUE,
	LocationAddress		 varchar(100),
	Comment				 varchar(255)  NULL,
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'DEVICETYPE' 
   and   type = 'U')
CREATE TABLE DEVICETYPE /*Eg., Arduino, Raspberry Pi, USB-6008, etc.*/
( 
	DeviceTypeId         int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	DeviceTypeName       varchar(100)  NOT NULL  UNIQUE,
	LocationId           int  NULL FOREIGN KEY (LocationId) REFERENCES LOCATION(LocationId),
	Comment				 varchar(255)  NULL,
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'DEVICE' 
   and   type = 'U')
CREATE TABLE DEVICE
( 
	DeviceId             int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	DeviceName           varchar(100)  NOT NULL  UNIQUE,
	DeviceTypeId         int  NOT NULL FOREIGN KEY (DeviceTypeId) REFERENCES DEVICETYPE(DeviceTypeId),
	LoggingInterval		 float NULL,
	DeviceAddress        varchar(100)  NULL, /*E.g., MAC Address*/
	Comment				 varchar(255)  NULL,
)
go



/* ----------- Tag Tables ----------- */



if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAGGROUP' 
   and   type = 'U')
CREATE TABLE TAGGROUP
( 
	TagGroupId           int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	GroupName            varchar(100)  NOT NULL  UNIQUE,
	Comment				 varchar(255)  NULL,
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAGROUPUSER' 
   and   type = 'U')
CREATE TABLE TAGROUPUSER
( 
	TagGroupUserId         int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	TagGroupId           int  NOT NULL FOREIGN KEY (TagGroupId) REFERENCES TAGGROUP(TagGroupId),
	UserId          int  NULL FOREIGN KEY (UserId) REFERENCES USERDATA(UserId),
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAGTYPE' 
   and   type = 'U')
CREATE TABLE TAGTYPE /*Eg., Temperature, Pressure, etc.*/
( 
	TagTypeId            int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	TagTypeName          varchar(100)  NOT NULL  UNIQUE,
	Comment				 varchar(255)  NULL ,
	UnitId               int  NULL FOREIGN KEY (UnitId) REFERENCES UNIT(UnitId),
)
go



if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAG' 
   and   type = 'U')
CREATE TABLE TAG
( 
	TagId           int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	TagName         varchar(100)  NOT NULL  UNIQUE,
	TagAlias        varchar(100)  NULL ,
	IOType			varchar(10)  NOT NULL, /*AI, AO, DI, DO*/
	IOChannel		varchar(10) NULL, /*E.g., AI0, AO1, DI0, DO4*/
	DeviceId        int  NOT NULL FOREIGN KEY (DeviceId) REFERENCES DEVICE(DeviceId),
	TagTypeId       int  NULL FOREIGN KEY (TagTypeId) REFERENCES TAGTYPE(TagTypeId),
	UnitId          int  NULL FOREIGN KEY (UnitId) REFERENCES UNIT(UnitId),
	TagStatus       int  NULL ,
	TagAddress      varchar(255)  NULL ,
	LoggingInterval	float NULL,
	Comment			varchar(255)  NULL ,

)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAGSCALING' 
   and   type = 'U')
CREATE TABLE TAGSCALING
( 
	TagScalingId         int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	TagId                int  NOT NULL UNIQUE FOREIGN KEY (TagId) REFERENCES TAG(TagId),
	RangeMin             float  NOT NULL,
	RangeMax             float  NOT NULL,
	EUMin                float  NOT NULL,
	EUMax                float  NOT NULL,
)
go



if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAGINGROUP' 
   and   type = 'U')
CREATE TABLE TAGINGROUP
( 
	TagInGroupId         int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	TagGroupId           int  NOT NULL FOREIGN KEY (TagGroupId) REFERENCES TAGGROUP(TagGroupId),
	TagId                int  NOT NULL  FOREIGN KEY (TagId) REFERENCES TAG(TagId),
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAGUSER' 
   and   type = 'U')
CREATE TABLE TAGUSER
( 
	TagUserId       int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	TagId           int  NOT NULL  FOREIGN KEY (TagId) REFERENCES TAG(TagId),
	UserId          int  NULL FOREIGN KEY (UserId) REFERENCES USERDATA(UserId),
)
go




if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAGDATA' 
   and   type = 'U')
CREATE TABLE TAGDATA
( 
	TagDataId           int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	TagId               int  NOT NULL FOREIGN KEY (TagId) REFERENCES TAG(TagId),
	TagDateTime         datetime  NOT NULL,
	TagAnalogValue      float  NULL,
	TagBinaryValue      bit  NULL, 
	Comment				varchar(255)  NULL,
)
go



/* ----------- Alarm Tables ----------- */



if not exists (SELECT name 
   from   sysobjects 
   where  name = 'ALARMPRIORITY' 
   and   type = 'U')
CREATE TABLE ALARMPRIORITY
( 
	AlarmPriorityId     int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	AlarmPriorityName   varchar(100)  NOT NULL  UNIQUE,
	Comment				varchar(255)  NULL ,
)
go



if not exists (SELECT name 
   from   sysobjects 
   where  name = 'ALARMCONFIGURATION' 
   and   type = 'U')
CREATE TABLE ALARMCONFIGURATION
( 
	AlarmConfigurationId int  NOT NULL  IDENTITY ( 1,1 ) Primary Key ,
	AlarmName            varchar(100)  NOT NULL  UNIQUE,
	Comment				 varchar(255)  NULL ,
	AlarmPriorityId      int  NULL FOREIGN KEY (AlarmPriorityId) REFERENCES ALARMPRIORITY(AlarmPriorityId),
)
go



if not exists (SELECT name 
   from   sysobjects 
   where  name = 'ALARMDATA' 
   and   type = 'U')
CREATE TABLE ALARMDATA
( 
	AlarmDataId          int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	AlarmConfigurationId int  NOT NULL FOREIGN KEY (AlarmConfigurationId) REFERENCES ALARMCONFIGURATION(AlarmConfigurationId),
	TagId                int  NOT NULL FOREIGN KEY (TagId) REFERENCES TAG(TagId),
)
go



/* ----------- Schedule Tables ----------- */


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'SCHEDULE' 
   and   type = 'U')
CREATE TABLE SCHEDULE
( 
	ScheduleId           int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	ScheduleName         varchar(100)  NOT NULL  UNIQUE,
	Active               bit  NULL,
)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'SCHEDULEENTRY' 
   and   type = 'U')
CREATE TABLE SCHEDULEENTRY
( 
	ScheduleEntryId      int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	ScheduleId           int  NOT NULL FOREIGN KEY (ScheduleId) REFERENCES SCHEDULE(ScheduleId),
	ScheduleDay          int  NOT NULL,
	ScheduleStartTime    datetime  NULL,
	ScheduleStopTime     datetime  NULL,

)
go


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'TAGINSCHEDULE' 
   and   type = 'U')
CREATE TABLE TAGINSCHEDULE
( 
	TagInScheduleId      int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	ScheduleId           int  NOT NULL FOREIGN KEY (ScheduleId) REFERENCES SCHEDULE(ScheduleId),
	TagId                int  NOT NULL FOREIGN KEY (TagId) REFERENCES TAG(TagId),
)
go



/* ----------- Event Tables ----------- */


if not exists (SELECT name 
   from   sysobjects 
   where  name = 'EVENTLOG' 
   and   type = 'U')
CREATE TABLE EVENTLOG
( 
	EventLogId           int  NOT NULL IDENTITY ( 1,1 ) Primary Key,
	EventName            varchar(100)  NOT NULL  UNIQUE,
	EventDateTime		 datetime NOT NULL,
	EventDescription     varchar(255)  NOT NULL,
)
go




	
/**********************************************************************************************/
/*GetTagData.sql*/
/**********************************************************************************************/
IF EXISTS (SELECT name 
	   FROM   sysobjects 
	   WHERE  name = 'GetMeasurementData' 
	   AND 	  type = 'V')
	DROP VIEW GetMeasurementData
GO

CREATE VIEW GetMeasurementData
AS

SELECT
MEASUREMENTDATA.MeasurementDataId, 
MEASUREMENT.MeasurementId, 
MEASUREMENT.MeasurementName, 
MEASUREMENTDATA.MeasurementTimeStamp, 
MEASUREMENTDATA.MeasurementValue


FROM MEASUREMENTDATA 
INNER JOIN MEASUREMENT ON MEASUREMENTDATA.MeasurementId = MEASUREMENT.MeasurementId

GO

	
/**********************************************************************************************/
/*GetTagList.sql*/
/**********************************************************************************************/
IF EXISTS (SELECT name 
	   FROM   sysobjects 
	   WHERE  name = 'GetTagList' 
	   AND 	  type = 'V')
	DROP VIEW GetTagList
GO

CREATE VIEW GetTagList
AS

SELECT        
TAG.TagId, 
TAG.TagName,
TAG.IOType,
TAG.IOChannel,  

TAGTYPE.TagTypeName, 

DEVICE.DeviceName, 

TAGSCALING.RangeMin, 
TAGSCALING.RangeMax, 

UNIT.UnitName,
TAGSCALING.EUMin, 
TAGSCALING.EUMax


FROM TAG 
INNER JOIN TAGTYPE ON TAG.TagTypeId = TAGTYPE.TagTypeId 
INNER JOIN DEVICE ON TAG.DeviceId = DEVICE.DeviceId 
INNER JOIN DEVICETYPE ON DEVICE.DeviceTypeId = DEVICETYPE.DeviceTypeId
INNER JOIN UNIT ON TAG.UnitId = UNIT.UnitId
INNER JOIN TAGSCALING ON TAG.TagId = TAGSCALING.TagId 


GO

	
/**********************************************************************************************/
/*CreateTag.sql*/
/**********************************************************************************************/
IF EXISTS (SELECT name 
   FROM   sysobjects 
   WHERE  name = 'CreateTag' 
   AND   type = 'P')
DROP PROCEDURE CreateTag
GO

CREATE PROCEDURE CreateTag
@TagName varchar(100),
@TagAlias varchar(100), 
@DeviceTypeName varchar(100),
@DeviceName varchar(100),
@TagTypeName varchar(100),
@IOType varchar(10),
@IOChannel	varchar(10),
@RangeMin float,
@RangeMax float,
@UnitName varchar(100),
@EUMin float,
@EUMax float
AS

DECLARE
@DeviceTypeId int,
@DeviceId int,
@TagTypeId int,
@UnitId int,
@TagId int

--DeviceType
if not exists (select * from DEVICETYPE where DeviceTypeName = @DeviceTypeName)
	insert into DEVICETYPE (DeviceTypeName) values (@DeviceTypeName)

select @DeviceTypeId = DeviceTypeId from DEVICETYPE where DeviceTypeName = @DeviceTypeName


--Device
if not exists (select * from DEVICE where DeviceName = @DeviceName)
	insert into DEVICE (DeviceName, DeviceTypeId) values (@DeviceName, @DeviceTypeId)

select @DeviceId = DeviceId from DEVICE where DeviceName = @DeviceName


--TagType
if not exists (select * from TAGTYPE where TagTypeName = @TagTypeName)
	insert into TAGTYPE (TagTypeName) values (@TagTypeName)

select @TagTypeId = TagTypeId from TAGTYPE where TagTypeName = @TagTypeName


--Unit
if not exists (select * from UNIT where UnitName = @UnitName)
	insert into UNIT (UnitName) values (@UnitName)

select @UnitId = UnitId from UNIT where UnitName = @UnitName


--Tag
if not exists (select * from TAG where TagName = @TagName)
	insert into TAG (TagName, TagAlias, IOType, IOChannel, DeviceId, TagTypeId, UnitId) 
	values (@TagName, @TagAlias, @IOType, @IOChannel, @DeviceId, @TagTypeId, @UnitId)

select @TagId = TagId from TAG where TagName = @TagName


--TagScaling
if not exists (select * from TAGSCALING where TagId = @TagId)
	insert into TAGSCALING (TagId, RangeMin, RangeMax, EUMin, EUMax)
	values (@TagId, @RangeMin, @RangeMax, @EUMin, @EUMax)               

GO


	          
	
/**********************************************************************************************/
/*RemoveTag.sql*/
/**********************************************************************************************/
IF EXISTS (SELECT name 
   FROM   sysobjects 
   WHERE  name = 'RemoveTag' 
   AND   type = 'P')
DROP PROCEDURE RemoveTag
GO

CREATE PROCEDURE RemoveTag
@TagId int
AS


DECLARE
@DeviceId int

select @DeviceId = DeviceId from DEVICE where DeviceName='Unknown'


--Tag
update TAG set
	DeviceId = @DeviceId
where TagId=@TagId
             

GO


	          
	
/**********************************************************************************************/
/*SaveTagData.sql*/
/**********************************************************************************************/
IF EXISTS (SELECT name 
   FROM   sysobjects 
   WHERE  name = 'SaveTagData' 
   AND   type = 'P')
DROP PROCEDURE SaveTagData
GO

CREATE PROCEDURE SaveTagData
@TagId int,
@TagAnalogValue float
AS


insert into TAGDATA (TagId, TagAnalogValue, TagDateTime) values (@TagId, @TagAnalogValue, getdate())

GO

	
/**********************************************************************************************/
/*UpdateTag.sql*/
/**********************************************************************************************/
IF EXISTS (SELECT name 
   FROM   sysobjects 
   WHERE  name = 'UpdateTag' 
   AND   type = 'P')
DROP PROCEDURE UpdateTag
GO

CREATE PROCEDURE UpdateTag
@TagId int,
@TagName varchar(100),
@TagAlias varchar(100), 
@DeviceTypeName varchar(100),
@DeviceName varchar(100),
@TagTypeName varchar(100),
@IOType varchar(10),
@IOChannel	varchar(10),
@RangeMin float,
@RangeMax float,
@UnitName varchar(100),
@EUMin float,
@EUMax float
AS

DECLARE
@DeviceTypeId int,
@DeviceId int,
@TagTypeId int,
@UnitId int


--DeviceType
if not exists (select * from DEVICETYPE where DeviceTypeName = @DeviceTypeName)
	insert into DEVICETYPE (DeviceTypeName) values (@DeviceTypeName)

select @DeviceTypeId = DeviceTypeId from DEVICETYPE where DeviceTypeName = @DeviceTypeName


--Device
if not exists (select * from DEVICE where DeviceName = @DeviceName)
	insert into DEVICE (DeviceName, DeviceTypeId) values (@DeviceName, @DeviceTypeId)

select @DeviceId = DeviceId from DEVICE where DeviceName = @DeviceName


--TagType
if not exists (select * from TAGTYPE where TagTypeName = @TagTypeName)
	insert into TAGTYPE (TagTypeName) values (@TagTypeName)

select @TagTypeId = TagTypeId from TAGTYPE where TagTypeName = @TagTypeName


--Unit
if not exists (select * from UNIT where UnitName = @UnitName)
	insert into UNIT (UnitName) values (@UnitName)

select @UnitId = UnitId from UNIT where UnitName = @UnitName


--Tag
update TAG set
	TagName = @TagName, 
	TagAlias = @TagAlias, 
	IOType = @IOType, 
	IOChannel = @IOChannel, 
	DeviceId = @DeviceId, 
	TagTypeId = @TagTypeId, 
	UnitId = @UnitId 
where TagId=@TagId


--TagScaling
update TAGSCALING set
	RangeMin = @RangeMin, 
	RangeMax = @RangeMax, 
	EUMin = @EUMin, 
	EUMax = @EUMax
where TagId=@TagId               

GO


	          
	
/**********************************************************************************************/
/*Default Data.sql*/
/**********************************************************************************************/
/*
Data Management and Monitoring (DMM) Data

These Tables can be used for Logging Process and Measurement Data, Home Automation Data, etc.

The Database can be local, in a network, on Internet or part of a Data Cloud Service

(C) Hans-Petter Halvorsen

Last Updated: 2016.06.03
*/


declare
@DeviceTypeId int,
@UnitId int,
@AccessLevelId int,
@UserId int


/* ----------------------------------- */
/* ---------- Device Types ----------- */
/* ----------------------------------- */

if not exists(select * from DEVICETYPE where DeviceTypeName='Unknown')
	insert into DEVICETYPE (DeviceTypeName) values ('Unknown')
select @DeviceTypeId = DeviceTypeId from DEVICETYPE where DeviceTypeName='Unknown'

if not exists(select * from DEVICE where DeviceName='Unknown')
	insert into DEVICE (DeviceName, DeviceTypeId) values ('Unknown', @DeviceTypeId)



if not exists(select * from DEVICETYPE where DeviceTypeName='USB-6008')
	insert into DEVICETYPE (DeviceTypeName) values ('USB-6008')

if not exists(select * from DEVICETYPE where DeviceTypeName='USB-6001')
	insert into DEVICETYPE (DeviceTypeName) values ('USB-6001')

if not exists(select * from DEVICETYPE where DeviceTypeName='Arduino UNO')
	insert into DEVICETYPE (DeviceTypeName) values ('Arduino UNO')

if not exists(select * from DEVICETYPE where DeviceTypeName='Raspberry Pi 2')
	insert into DEVICETYPE (DeviceTypeName) values ('Raspberry Pi 2')

if not exists(select * from DEVICETYPE where DeviceTypeName='Raspberry Pi 3')
	insert into DEVICETYPE (DeviceTypeName) values ('Raspberry Pi 3')



/* ------------------------------------------ */
/* ---------- Tag Types and Units ----------- */
/* ------------------------------------------ */

if not exists(select * from UNIT where UnitName='Unknown')
	insert into UNIT (UnitName) values ('Unknown')

select @UnitId = UnitId from UNIT where UnitName='Unknown'


if not exists(select * from TAGTYPE where TagTypeName='Unknown')
	insert into TAGTYPE (TagTypeName, UnitId) values ('Unknown', @UnitId)




if not exists(select * from UNIT where UnitName='Celsius')
	insert into UNIT (UnitName) values ('Celsius')

select @UnitId = UnitId from UNIT where UnitName='Celsius'


if not exists(select * from TAGTYPE where TagTypeName='Temperature')
	insert into TAGTYPE (TagTypeName, UnitId) values ('Temperature', @UnitId)




if not exists(select * from UNIT where UnitName='kPa')
	insert into UNIT (UnitName) values ('kPa')

select @UnitId = UnitId from UNIT where UnitName='kPa'



if not exists(select * from TAGTYPE where TagTypeName='Pressure')
	insert into TAGTYPE (TagTypeName, UnitId) values ('Pressure', @UnitId)



/* --------------------------------------------- */
/* ---------- Access Levels and Users----------- */
/* --------------------------------------------- */

if not exists(select * from ACCESSLEVEL where AccessName='Administrator')
	insert into ACCESSLEVEL (AccessName) values ('Administrator')
select @AccessLevelId = AccessLevelId from ACCESSLEVEL where AccessName='Administrator'

if not exists(select * from USERDATA where UserName='Administrator')
	insert into USERDATA (UserName, Pwd) values ('Administrator', 'Administrator')
select @UserId = UserId from USERDATA where UserName='Administrator'

if not exists(select * from USERACCESS where UserId=@UserId and AccessLevelId=@AccessLevelId)
	insert into USERACCESS (UserId, AccessLevelId) values (@UserId, @AccessLevelId)



if not exists(select * from ACCESSLEVEL where AccessName='Basic')
	insert into ACCESSLEVEL (AccessName) values ('Basic')
select @AccessLevelId = AccessLevelId from ACCESSLEVEL where AccessName='Basic'

if not exists(select * from USERDATA where UserName='Basic')
	insert into USERDATA (UserName, Pwd) values ('Basic', 'Basic')
select @UserId = UserId from USERDATA where UserName='Basic'

if not exists(select * from USERACCESS where UserId=@UserId and AccessLevelId=@AccessLevelId)
	insert into USERACCESS (UserId, AccessLevelId) values (@UserId, @AccessLevelId)

