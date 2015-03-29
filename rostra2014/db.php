<?php
          $server="localhost";
          $user="litsocbi_root";
          $pass="cassandra02#";
          $database="litsocbi_rostra";

          $con=mysqli_connect($server, $user, $pass, $database);

          if(!$con)
          echo '<h1>Database Error</h1>';
          

        


         
              $event='';
              if(isset($_POST['marcos']))
              $event=$event.' marcos, ';
              if(isset($_POST['spell-bee']))
              $event=$event.' spell-bee, ';
              if(isset($_POST['panchayati-raj']))
              $event=$event.' panchayati-raj, ';
            if(isset($_POST['scavenger-hunt']))
              $event=$event.' scavenger-hunt, ';
            if(isset($_POST['concentric-circles']))
              $event=$event.' concentric-circles, ';
            if(isset($_POST['shabd-dwand']))
              $event=$event.' shabd-dwand, ';
            if(isset($_POST['creative-writing']))
              $event=$event.' Be-The-Next-Shakespear, ';
            if(isset($_POST['newsroom']))
              $event=$event.' newsroom, ';
            if(isset($_POST['quick-flicks']))
              $event=$event.' quick-flicks, ';
            if(isset($_POST['superheroes']))
              $event=$event.' superheroes, ';
            if(isset($_POST['viewpoint']))
              $event=$event.' viewpoint, ';
            if(isset($_POST['mythical-extempore']))
              $event=$event.' mythical-extempore, ';
            if(isset($_POST['rewrite-the-history']))
              $event=$event.' rewrite-the-history, ';
            if(isset($_POST['vaad-vivaad']))
              $event=$event.' vaad-vivaad, ';
            if(isset($_POST['surprise-event']))
              $event=$event.' surprise-event, ';
            $team_name=$_POST['team_name'];
            $mem1_name=$_POST['mem1_name'];
            $mem2_name=$_POST['mem2_name'];
            $mem3_name=$_POST['mem3_name'];
            $mem4_name=$_POST['mem4_name'];
            $mem5_name=$_POST['mem5_name'];
            $mem1_roll=$_POST['mem1_roll'];
            $mem2_roll=$_POST['mem2_roll'];
            $mem3_roll=$_POST['mem3_roll'];
            $mem4_roll=$_POST['mem4_roll'];
            $mem5_roll=$_POST['mem5_roll'];
            
            $member=$mem1_name.' '.$mem1_roll.' '.$mem2_name.' '.$mem2_roll.' '.$mem3_name.' '.$mem3_roll.' '.$mem4_name.' '.$mem4_roll.' '.$mem5_name.' '.$mem5_roll;
            $contact1=$_POST['contact1'];
            $contact2=$_POST['contact2'];
            $phone=$contact1.' '.$contact2;
            $email=$_POST['email'];
            $college=$_POST['college'];
            if($team_name==null || $mem1_name==null || $mem1_roll==null || $contact1==null || $email==null || $college==null)
            	echo ' You have not filled one of the compulsory fields, kindly complete the form to register with us.';
            else
            {
            $query='INSERT INTO `litsocbi_rostra`.`registration` (team_name, members, phone, email, college, events) VALUES ("'.$team_name.'","'.$member.'","'.$phone.'","'.$email.'","'.$college.'","'.$event.'")';
            
      //echo $query;
      
      $result=mysqli_query($con,$query);
      if($result)
          echo 'Resgistration Successful. May The Forces be with You!!';
          //echo $event;
          //echo $college;
          //echo $team_name;
          //echo $member;
          //form block
          }
          
  ?>