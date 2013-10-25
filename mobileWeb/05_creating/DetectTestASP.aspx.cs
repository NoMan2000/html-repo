using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class TestUADetect : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        bool isMobile = false;


        if (isMobile)
        {
            result.InnerText = "This appears to be a mobile browser.";
        }
        else
        {
            result.InnerText = "Hmmm, not a mobile browser.";
        }
    }
}