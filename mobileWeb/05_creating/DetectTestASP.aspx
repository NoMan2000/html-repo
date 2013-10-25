<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DetectTestASP.aspx.cs" Inherits="TestUADetect" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title>Test User Agent Detection and Redirection</title>
    <meta name="Viewport" content="width=device-width" />
</head>
<body>
	<h1>ASP.NET User Agent Detection</h1>
	<p>This page performs a simple string-based test to see if the incoming request is
	from a mobile browser. The string at the bottom of this page will indicate
	whether a mobile browser was detected.</p>
	<p>The user agent string is: <span id="uaString" runat="server"></span></p>
    <form id="form1" runat="server">
    <h2 id="result" runat="server">
    </h2>
    </form>
</body>
</html>
