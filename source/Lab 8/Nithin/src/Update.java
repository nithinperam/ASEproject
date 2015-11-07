import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

/**
 * Servlet implementation class UpdateStock
 */
@WebServlet("/Update")
public class Update extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Update() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		MongoClientURI uri=new MongoClientURI("mongodb://root:root@ds031611.mongolab.com:31611/expensestracker");	
		MongoClient client=new MongoClient(uri);
		
		try {
			
		DB db=client.getDB(uri.getDatabase());
		DBCollection customers=db.getCollection("expenses");
		
		BasicDBObject updateQuery = new BasicDBObject("ename", request.getParameter("ename"));
		customers.update(updateQuery, new BasicDBObject("$set", new BasicDBObject("eamount", request.getParameter("eamount"))));
         
       
		doGet(request, response);
		//response.setContentType("text/html");
		response.sendRedirect("Display.html");
		//PrintWriter out = response.getWriter();
		//out.println("New Password For "+request.getParameter("name")+" Updated");
		//out.println("<a href=\"Home.html\">Go Back to Home</a>");
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
//		finally {
//			client.close();
//		}
	}

}