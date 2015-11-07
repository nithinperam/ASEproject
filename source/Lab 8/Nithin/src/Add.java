import java.io.IOException;
import java.io.PrintWriter;

import javax.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.WriteResult;
import com.mongodb.gridfs.CLI;
import com.mongodb.util.JSON;

@WebServlet("/Add")
public class Add extends HttpServlet {

    public Add() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
    	try
    	{
	    	String ename = request.getParameter("ename");
	    	String amount=request.getParameter("eamount");
	    	String date=request.getParameter("edate");
	    	
	    	BasicDBObject dbObject = new BasicDBObject();
	    	dbObject.put("ename", ename);
	    	dbObject.put("eamount", amount);
	    	dbObject.put("edate", date);
	    	
			System.out.println(dbObject);
			MongoClientURI uri=new MongoClientURI("mongodb://root:root@ds031611.mongolab.com:31611/expensestracker");	
			MongoClient client=new MongoClient(uri);
			DB db=client.getDB(uri.getDatabase());
			DBCollection customers=db.getCollection("expenses");
			
			WriteResult result=customers.insert(dbObject);
			PrintWriter out = response.getWriter();
			out.println("Expense Added");
			//JOptionPane.showMessageDialog(null, "Details has been Added");
			
			//response.sendRedirect("Home.html");
		}
	    	catch(Exception e)
	    	{
	    		System.out.println(e);
	    	}
    	
    }

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}